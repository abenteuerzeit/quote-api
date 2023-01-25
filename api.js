const express = require('express');
const apiRouter = express.Router();
const { quotes } = require('./data');
const { getRandomElement } = require('./utils');


module.exports = apiRouter;