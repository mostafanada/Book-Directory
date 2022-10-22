const express = require('express');
const {checkUser} =require('../middleware/aurhmiddleware')
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
authorRoute.post('/insert',checkUser, insertAuthor);
authorRoute.put('/update/:id',checkUser, updateAuthor);
authorRoute.delete('/delete/:id', checkUser,deleteAuthor);
authorRoute.get('/findAuthor/:id', findAuthor);
module.exports = authorRoute;
