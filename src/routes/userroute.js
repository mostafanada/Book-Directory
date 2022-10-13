const express = require('express');
// const {findAll,deleteUser,updateUser,signup,findUser,login_post}=require('../model/usermodel');
const {
  logout,
  signup,
  updateUser,
  deleteUser,
  login,
} = require('../model/usermodel');
const userRoute = express.Router();

userRoute.get('/test', (req, res) => {
  res.send(`3eb ya ma3alem tesho5 feya`);
});
//This to before authentication
// userRoute.get('/findAll',findAll);
// userRoute.get('/findOne/:id',findUser)
userRoute.post('/signup', signup);
userRoute.post('/login', login);
userRoute.put('/update/:id', updateUser);
userRoute.delete('/delete/:id', deleteUser);
userRoute.get('/logout', logout);
module.exports = userRoute;
