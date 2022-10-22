const mongoose = require('mongoose');
const { isEmail } = require('validator');
const Schema = mongoose.Schema;
const authorSchema = new mongoose.Schema({
    email:{
    type: String,
    require: [true, 'Please enter an email...'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email...']
  },
  name:{
    type:String,
    require:true
  },
  age:  Number,
  Books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'books',
    },
  ],
});

let author = mongoose.model('authors', authorSchema);

module.exports = author;
