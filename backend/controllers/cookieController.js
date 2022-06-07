const cookieController = {};

//Should be able to leverage npm cookie-parser library

/**
 * setCookie - set a cookie with an expiration date
 */
cookieController.setCookie = (req, res, next) => {
  // res.cookie('User', 'Rickyz'); //testing setting of cookie
  // return next();
};

/**
 * getCookie - attempt to get cookie to see if a user is logged in
 */
cookieController.getCookie = (req, res, next) => {
  //   res.locals.cookie =  document.cookie.split(';').some(c => {
  //     return c.trim().startsWith('User' + '=');
  // })
};

/**
 * deleteCookie - remove cookie on signout by setting expiration date to a historical date
 */
cookieController.deleteCookie = (req, res, next) => {};

module.exports = cookieController;
