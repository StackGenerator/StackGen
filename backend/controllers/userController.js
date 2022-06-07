const userController = {};

/**
 * createUser - create and save a new User into the database.
 */
userController.createUser = async (req, res, next) => {
  //Create user in the database
  // try {
  //   const { username, password } = req.body;
  //   res.locals.userName = username;
  //   const newUser = await User.create({
  //     username: username,
  //     password: password,
  //   });
  //   await newUser.save((err, user) => {});
  //   res.locals.id = newUser.id;
  //   return next();
  // } catch (error) {
  //   return next({ err: error });
  // }
};

/**
 * verifyUser - Obtain username and password from the request body, locate
 * the appropriate user in the database, and then authenticate the submitted password
 * against the password stored in the database.
 */
userController.verifyUser = async (req, res, next) => {
  // try {
  //   const { username, password } = req.body;
  //   res.locals.userName = username;
  //Check database for existence of user and appropriate password
  //   const verifiedUser = await User.findOne({ username: username });
  //   if (verifiedUser.password === password) {
  //     res.locals.id = verifiedUser.id;
  //     return next();
  //   } else {
  //     res.redirect('/signup/');
  //   }
  // } catch (error) {
  //   return next({ err: error });
};

module.exports = userController;
