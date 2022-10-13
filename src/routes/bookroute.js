const express = require('express');
const {
  findAll,
  deleteBook,
  updateBook,
  insert,
  findBook,
} = require('../model/bookmodel');

const bookRoute = express.Router();

//To Test the route
bookRoute.get('/test', (req, res) => {
  res.send(`3eb ya ma3alem tesho5 feya`);
});

bookRoute.get('/findAll', findAll);
bookRoute.get('/findOne/:id', findBook);
bookRoute.post('/insert', insert);
bookRoute.put('/update/:id', updateBook);
bookRoute.delete('/delete/:id', deleteBook);
module.exports = bookRoute;
