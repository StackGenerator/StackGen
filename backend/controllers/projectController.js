const projectController = {};
const db = require('../db.js');

/**
 * getProjects - retrieve projects for a user
 */
projectController.getProjects = async (req, res, next) => {
  //incoming: res.locals.username, res.locals.activeSSID, res.locals.isLoggedIn
  const username = res.locals.username;
  //outgoing: //incoming: res.locals.username, res.locals.activeSSID, res.locals.isLoggedIn, res.locals.projectList
  try {
    console.log(`Entered projectController.getProjects middleware`);
    if (res.locals.isLoggedIn) {
      //Retrieve project list for a user
      //INPUT DATABASE LOGIC HERE
      const queryString = `SELECT * FROM project WHERE user_name='${username}'`;
      const projects = await db.query(queryString);
      console.log(projects.rows);
      //projectList array will have projName
      const projList = [];
      projects.rows.forEach((proj) => {
        projList.push(proj);
      });

      // console.log(projObject);

      res.locals.projectList = projList;
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
  const { username } = res.locals;
  const projName = req.body.projName;
  const { frontend, css, runtime, buildtool, database, unit, e2e } =
    // req.body.projectList;
    req.body.techStack;
  // const { frontend, css, runtime, buildtool, database, unit, e2e } = req.body.projectList.techStack;
  try {
    console.log(`Entered projectController.addProject middleware`);
    if (res.locals.isLoggedIn) {
      //Add project to list for a user
      //INPUT DATABASE LOGIC HERE
      const queryString = `INSERT INTO project (user_name, project_name, frontend, css, runtime, buildtool, "database", unit, e2e) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
      const value = [
        username,
        projName,
        frontend,
        css,
        runtime,
        buildtool,
        database,
        unit,
        e2e,
      ];
      db.query(queryString, value, (err, res) => {
        if (err) {
          console.log('ERROR WITH DB QUERY');
          console.log(err.stack);
        } else {
          console.log('project added to database successfully');
        }
      });
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
    console.log(`Entered projectController.deleteProject middleware`);
    console.log(req.params);
    if (res.locals.isLoggedIn) {
      // const { projectName, username } = req.body;
      const projectName = req.params.proj;
      const username = res.locals.username;
      res.locals.projectName = projectName;
      //Delete project from list for a user based on username and project name
      //INPUT DATABASE LOGIC HERE
      const queryString = `DELETE FROM project WHERE project_name='${projectName}' AND user_name='${username}'`;
      db.query(queryString);
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
projectController.updateProject = async (req, res, next) => {
  try {
    console.log(`Entered projectController.updateProject middleware`);
    if (res.locals.isLoggedIn) {
      const { projectName } = req.body;
      res.locals.projectName = projectName;
      //Update project name from list for a user based on username and project name
      //INPUT DATABASE LOGIC HERE
      // const queryString = `UPDATE project SET project_name = '${projectName}' WHERE project_name = '${projectName}'`
      // await db.query(queryString);
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
