const express = require('express');
const apiRouter = express.Router();
const { quotes } = require('./data');
const { getRandomElement } = require('./utils');


// GET api/quotes?person=author
apiRouter.get('/quotes', (req, res, next) => {
    const { person } = req.query;
    if (person) {
        res.status(200).json({ quotes: quotes.filter(q => q.person.toLowerCase() === person.toLowerCase()) });
    } else {
        res.status(200).json({ quotes });
    }
});

// GET api/quotes/random
apiRouter.get('/quotes/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    res.status(200).json({ quote: randomQuote });
});

// POST api/quotes
apiRouter.post('/quotes', (req, res, next) => {
    if (req.query.quote && req.query.person) {
        const highestId = quotes.find(q => q.id === Math.max(...quotes.map(q => q.id)));
        const newQuote = {
            id: highestId.id + 1,
            quote: req.query.quote,
            person: req.query.person
        }
        quotes.push(newQuote);
        console.log(`Added quote ${newQuote.quote} by ${newQuote.person} with id ${newQuote.id}`);
        res.status(201).json({ quote: newQuote });
    } else {
        console.log(`Query parameters missing, received: ${req.query}`);
        res.status(400).json({ error: 'Invalid request: query parameters quote and person are required'});
    }
});

// DELETE api/quotes/:id
apiRouter.delete('/quotes/:id', (req, res, next) => {
    const index = quotes.findIndex(q => q.id === Number(req.params.id));
    if (index!== -1) {
        quotes.splice(index, 1);
        console.log(`Deleted quote with id ${req.params.id}`);
        res.status(204).end();
    } else {
        console.log(`Quote with id ${req.params.id} not found`);
        res.status(404).end();
    }
});

module.exports = apiRouter;
