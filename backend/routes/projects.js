var express = require('express');
var router = express.Router();
const cookieController = require('../controllers/cookieController');
const projectController = require('../controllers/projectController');

/* GET project list for a user. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/* GET project list for a user. */
// '/projects/login',
router.get(
  '/',
  cookieController.getCookie,
  projectController.getProjects,
  function (req, res, next) {}
);

/* Update project list for a user. */
// '/projects/login',
router.post(
  '/',
  cookieController.getCookie,
  projectController.setProject,
  function (req, res, next) {}
);

/* Update project list for a user. */
// '/projects/login',
// router.delete(
//   '/',
//   cookieController.getCookie,
//   projectController.setProject,
//   function (req, res, next) {}
// );

module.exports = router;
