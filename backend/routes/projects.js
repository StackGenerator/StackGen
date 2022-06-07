var express = require('express');
var router = express.Router();
const cookieController = require('../controllers/cookieController');
const projectController = require('../controllers/projectController');
const userController = require('../controllers/userController');

//getCookies and setCookies middleware will both populate
//res.locals.username and res.locals.activeSSID
//so these will be available to later middleware functions

/* GET project list for a user. */
// '/projects/login',
router.get(
  '/',
  cookieController.getCookies,
  userController.isLoggedIn,
  projectController.getProjects,
  function (req, res, next) {
    return res.status(200).json(res.locals.projectList);
  }
);

/* Add project to list list for a user. */
// '/projects/login',
router.post(
  '/',
  cookieController.getCookies,
  userController.isLoggedIn,
  projectController.addProject,
  projectController.getProjects,
  function (req, res, next) {
    return res.status(200).json(res.locals.projectList);
  }
);

/* Update project list for a user. */
// '/projects/login',
router.patch(
  '/',
  cookieController.getCookies,
  userController.isLoggedIn,
  projectController.updateProject,
  projectController.getProjects,
  function (req, res, next) {
    return res.status(200).json(res.locals.projectList);
  }
);

/* Delete project from user list. */
// '/projects/login',
router.delete(
  '/',
  cookieController.getCookies,
  userController.isLoggedIn,
  projectController.updateProject,
  projectController.getProjects,
  function (req, res, next) {
    return res.status(200).json(res.locals.projectList);
  }
);

module.exports = router;
