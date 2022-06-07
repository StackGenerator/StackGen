var express = require('express');
var router = express.Router();
const cookieController = require('../controllers/cookieController');
const userController = require('../controllers/userController');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// '/users/login',
// 'checks if user is logged in on application load
router.get('/login', cookieController.getCookie, function (req, res, next) {
  return res.status(200).json({ isLoggedIn: res.locals.isLoggedIn });
});

// '/users/login',
router.post(
  '/login',
  userController.verifyUser,
  cookieController.setCookie,
  function (req, res, next) {
    return res.status(200).send('Cookie set');
  }
);

// '/users/logout',
router.post(
  '/logout',
  cookieController.getCookie,
  cookieController.deleteCookie,
  function (req, res, next) {}
);

// '/users/signup',
router.post(
  '/signup',
  userController.createUser,
  cookieController.setCookie,
  function (req, res, next) {}
);

module.exports = router;
