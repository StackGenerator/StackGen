const userController = {};
const db = require("../db.js");
/**
 * createUser - create and save a new User into the database.
 */
userController.createUser = async (req, res, next) => {
  //outgoing on success: res.locals.username
  try {
    console.log(`Entered userController.createUser middleware`);
    const { username, password, email } = req.body;
    res.locals.username = username;
    res.locals.password = password;
    res.locals.email = email;
    //Create user in the database
    //INPUT DATABASE LOGIC HERE
    const queryString = `INSERT INTO "user" (user_name, password, email) VALUES ($1, $2, $3)`;
    const value = [username, password, email];
    db.query(queryString, value, (err, res) => {
      if (err) {
        console.log('ERROR WITH DB QUERY');
        console.log(err.stack);
      }
    });
    //END DATABASE LOGIC
  } catch (err) {
    return next({
      log: `ERROR: userController.createUser: ${err}`,
      message: 'Unable to create user. Check server logs',
    });
  }
};

/**
 * verifyUser - Obtain username and password from the request body, locate
 * the appropriate user in the database, and then authenticate the submitted password
 * against the password stored in the database.
 */
userController.verifyUser = async (req, res, next) => {
  try {
    console.log(`Entered userController.verifyUser middleware`);
    const { username, password } = req.body;
    res.locals.username = username;
    res.locals.password = password;
    //Check database for existence of user and appropriate password
    //INPUT DATABASE LOGIC HERE
    const queryString = `SELECT password FROM "user" WHERE user_name='${username}'`;
    const dbPassword = await db.query(queryString);
    console.log(dbPassword.rows);
    if (!dbPassword.rows[0]) return res.send('Username does not exist');
    else console.log('user & password match!');
    next();
  } catch (err) {
    return next({
      log: `ERROR: userController.verifyUser: ${err}`,
      message: 'Unable to verify user. Check server logs',
    });
  }
};

/**
 * check whether user logged in by cross-referencing cookies in browser (user, ssid) versus
 * active user session info in database (user, ssid)....if match, count them as isLoggedIn
 */
userController.isLoggedIn = async (req, res, next) => {
  //incoming: res.locals.username, res.locals.activeSSID
  const { username, SSID } = req.body;
  //outoing: res.locals.username, res.locals.activeSSID, res.locals.isLoggedIn
  try {
    console.log(`Entered userController.isLoggedIn middleware`);
    //INPUT DATABASE LOGIC HERE
    //check username and activeSSID versus active session table to determine if user should be logged in
    const queryString = `SELECT cookie FROM cookie WHERE user_name='${username}'`;
    const sessionSSID = await db.query(queryString);
    //if they should be logged in, set res.locals.isLoggedIn to true
    if(sessionSSID === SSID) res.locals.isLoggedIn = true;
    //username cookie and activesSSID...if these match the database activeSession information....set isLoggedIn (res.locals.isLoggedIn) to true
    //END DATABASE LOGIC
    return next();
  } catch (err) {
    return next({
      log: `ERROR: userController.isLoggedIn: ${err}`,
      message: 'Unable to check if user is logged in. Check server logs',
    });
  }
};

/**
 * remove user and ssid from active session table
 */
userController.logout = async (req, res, next) => {
  //incoming: res.locals.username, res.locals.activeSSID
  const { username } = res.locals;
  try {
    console.log(`Entered userController.logout middleware`);
    //Delete user record from activeSessions database table
    //INPUT DATABASE LOGIC HERE
    const queryString = `DELETE FROM cookie WHERE user_name='${username}'`
    db.query(queryString);
    //END DATABASE LOGIC
    return next();
  } catch (err) {
    return next({
      log: `ERROR: userController.logout: ${err}`,
      message:
        'Unable to delete active user session from database. Check server logs',
    });
  }
};

module.exports = userController;
