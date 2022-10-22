const express = require('express');
const {
    updateAuthor,
    deleteAuthor,
    insertAuthor,
    findAuthor
} = require('../model/authormodel');
const authorRoute = express.Router();

authorRoute.get('/test', (req, res) => {
  res.send(`3eb ya ma3alem tesho5 feya`);
});
authorRoute.post('/insert', insertAuthor);
authorRoute.put('/update/:id', updateAuthor);
authorRoute.delete('/delete/:id', deleteAuthor);
authorRoute.get('/findAuthor/:id', findAuthor);
module.exports = authorRoute;
