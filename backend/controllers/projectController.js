const projectController = {};

/**
 * getProjects - retrieve projects for a user
 */
projectController.getProjects = (req, res, next) => {
  //incoming: res.locals.username, res.locals.activeSSID, res.locals.isLoggedIn
  //outgoing: //incoming: res.locals.username, res.locals.activeSSID, res.locals.isLoggedIn, res.locals.projectList
  try {
    if (res.locals.isLoggedIn) {
      //Retrieve project list for a user
      //INPUT DATABASE LOGIC HERE
      //END DATABASE LOGIC
    } else {
      throw new Error('User is not logged in');
    }

    return next();
  } catch (err) {
    return next({
      log: `ERROR: projectController.getProjects: ${err}`,
      message: 'Unable to get projects for user. Check server logs',
    });
  }
};

/**
 * addProject - add project to user's project list
 */
projectController.addProject = (req, res, next) => {
  //incoming: res.locals.username, res.locals.activeSSID, res.locals.isLoggedIn
  //outgoing: res.locals.username, res.locals.activeSSID, res.locals.isLoggedIn
  try {
    if (res.locals.isLoggedIn) {
      //Add project to list for a user
      //INPUT DATABASE LOGIC HERE
      //END DATABASE LOGIC
    } else {
      throw new Error('User is not logged in');
    }

    return next();
  } catch (err) {
    return next({
      log: `ERROR: projectController.addProject: ${err}`,
      message: 'Unable to add project for user. Check server logs',
    });
  }
};

/**
 * deleteProject - remove project from user's project list
 */
projectController.deleteProject = (req, res, next) => {
  //incoming: res.locals.username, res.locals.activeSSID, res.locals.isLoggedIn
  //outgoing: //incoming: res.locals.username, res.locals.activeSSID, res.locals.isLoggedIn, res.locals.projectName

  try {
    if (res.locals.isLoggedIn) {
      const { projectName } = req.body;
      res.locals.projectName = projectName;
      //Delete project from list for a user based on username and project name
      //INPUT DATABASE LOGIC HERE
      //END DATABASE LOGIC
    } else {
      throw new Error('User is not logged in');
    }

    return next();
  } catch (err) {
    return next({
      log: `ERROR: projectController.deleteProject: ${err}`,
      message: 'Unable to delete project for user. Check server logs',
    });
  }
};

/**
 * updateProject - update project's information
 */
projectController.updateProject = (req, res, next) => {
  try {
    if (res.locals.isLoggedIn) {
      const { projectName } = req.body;
      res.locals.projectName = projectName;
      //Update project name from list for a user based on username and project name
      //INPUT DATABASE LOGIC HERE
      //END DATABASE LOGIC
    } else {
      throw new Error('User is not logged in');
    }

    return next();
  } catch (err) {
    return next({
      log: `ERROR: projectController.updateProject: ${err}`,
      message: 'Unable to update project of user. Check server logs',
    });
  }
};

module.exports = projectController;
