const express = require('express');
const apiRouter = express.Router();
const { quotes } = require('./data');
const { getRandomElement } = require('./utils');


apiRouter.get('/quotes', (req, res, next) => {
    res.status(200).json({ quotes: quotes });
});



module.exports = apiRouter;