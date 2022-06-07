const cookieController = {};

//Should be able to leverage npm cookie-parser library

/**
 * setCookie - set a cookie with an expiration date
 */
cookieController.setCookies = (req, res, next) => {
  //incoming: res.locals.username
  //outgoing if successful: res.locals.username, res.locals.ssid
  try {
    res.cookie('username', res.locals.username);
    let ssid = Math.floor(Math.random() * 100000); //setting session id for a user to make sure cookie information is linked to active user
    res.cookie('ssid', ssid);
    res.locals.ssid = ssid;

    //Update activeSessions database table with the username and active session id
    //INPUT DATABASE LOGIC HERE

    //END DATABASE LOGIC

    return next();
  } catch (err) {
    return next({
      log: `ERROR: cookieController.setCookies: ${err}`,
      message: 'Unable to set cookies for user. Check server logs',
    });
  }
};

/**
 * getCookie - attempt to get cookies to see if a user should already be logged in
 */
cookieController.getCookies = (req, res, next) => {
  //outgoing if successful: res.locals.username, res.locals.activeSSID

  try {
    //using cookie-parser which populates req.cookies object to retrieve cookie info
    res.locals.username = req.cookies.username;
    res.locals.activeSSID = req.cookies.ssid;
    return next();
  } catch (err) {
    return next({
      log: `ERROR: cookieController.getCookies: ${err}`,
      message: 'Unable to get cookies for user. Check server logs',
    });
  }
};

/**
 * deleteCookie - remove cookie using express res.clearCookie method
 */
cookieController.deleteCookies = (req, res, next) => {
  //incoming: res.locals.username, res.locals.activeSSID

  try {
    //using express clearCookie method to remove cookies from browser
    res.clearCookie('username');
    res.clearCookie('ssid');
    return next();
  } catch (err) {
    return next({
      log: `ERROR: cookieController.deleteCookies: ${err}`,
      message: 'Unable to delete cookies for user. Check server logs',
    });
  }
};

module.exports = cookieController;
