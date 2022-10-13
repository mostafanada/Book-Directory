const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userScema = new Schema({
  email: {
    type: String,
    require: [true, 'Please enter an email...'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email...'],
  },
  password: {
    type: String,
    required: [true, 'Please enter an password'],
    minlength: [6, 'The password is less than 6'],
  },
  name: {
    type: String,
    require: true,
  },
  age: Number,
  Books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'books',
    },
  ],
});
userScema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
userScema.statics.login = async function (email, password) {
  const users = await this.findOne({ email });
  if (users) {
    const auth = await bcrypt.compare(password, users.password);
    if (auth) {
      return users;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};
let user = mongoose.model('users', userScema);

module.exports = user;
