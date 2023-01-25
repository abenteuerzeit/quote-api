# Quote API

A small Express.js web API to store and serve different quotes about computers, coding, and technology.

## Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run node `server.js` to start the server
4. Navigate to `localhost:4001` to see the API in action.

## cUrl support

The API supports cUrl requests. To get quotes, run:

    curl http://localhost:4001/api/quotes

## Postman support

The API supports Postman requests. To get quotes, run:

    GET http://localhost:4001/api/quotes

    POST http://localhost:4001/api/quotes
    {
        "quote": "This is a quote",
        "author": "Author Name"
    }

    PUT http://localhost:4001/api/quotes?quote=quoteText&author=authorName


