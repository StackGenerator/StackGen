var express = require('express');
var router = express.Router();
const cookieController = require('../controllers/cookieController');
const userController = require('../controllers/userController');

//getCookies and setCookies middleware will both populate
//res.locals.username and res.locals.activeSSID
//so these will be available to later middleware functions

// '/users/login'
// 'on application load - checks to see if user should already be logged via cookies stored
router.get(
  '/login',
  cookieController.getCookies,
  userController.isLoggedIn, //checks if user and ssid match info in active sessions table
  function (req, res, next) {
    return res.status(200).json({ isLoggedIn: res.locals.isLoggedIn });
    // return res.status(200).send(); //DELETE THIS LINE, JUST TESTING COOKIEPARSER
  }
);

// '/users/login'
// attempts to login an already existing user after they entered their credentials and submitted them
router.post(
  '/login',
  userController.verifyUser, //verifies user info versus database
  cookieController.setCookies, //sets username and ssid cookie if user submitted correctly
  userController.isLoggedIn,
  function (req, res, next) {
    return res.status(200).json({ isLoggedIn: res.locals.isLoggedIn });
  }
);

// '/users/logout',
router.post(
  '/logout',
  cookieController.getCookies, //gather user and activeSSID info
  cookieController.deleteCookies, //remove cookies
  userController.logout, //remove user from active session table
  function (req, res, next) {
    return res.status(200).json({ isLoggedIn: false });
  }
);

// '/users/signup',
// attempts to login user if they have successfully signed up
router.post(
  '/signup',
  userController.createUser,
  cookieController.setCookies, //sets username and ssid cookie if user submitted correctly
  userController.isLoggedIn,
  function (req, res, next) {
    console.log(
      `End of new signup route - isLoggedIn: ${res.locals.isLoggedIn}`
    );
    return res.status(200).json({ isLoggedIn: res.locals.isLoggedIn });
  }
);

module.exports = router;
