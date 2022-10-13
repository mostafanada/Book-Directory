const user = require('../Schema/userSchema');
const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, 'Secret salt', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.send('Not loged');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.send('Not loged');
  }
};
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, 'Secret salt', async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.user = null;
        next();
      } else {
        console.log(decodedToken);
        let users = await user.findById(decodedToken.id);
        res.locals.user = users;
        next();
      }
    });
  } else {
    res.locals.user = null;
    // next()
    res.send('Not verify');
  }
};
module.exports = { requireAuth, checkUser };
