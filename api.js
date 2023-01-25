const express = require('express');
const apiRouter = express.Router();
const { quotes } = require('./data');
const { getRandomElement } = require('./utils');


apiRouter.get('/quotes', (req, res, next) => {
    res.status(200).json({ quotes: quotes });
});

apiRouter.get('/quotes/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    res.status(200).json({ quote: randomQuote });
});

module.exports = apiRouter;