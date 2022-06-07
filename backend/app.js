var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var projectsRouter = require('./routes/projects');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); //every request moves through cookieParser - req.cookies populates {cookiename: value, cookiename: value}
app.use(express.static(path.join(__dirname, 'public')));

//RJ - ENDPOINT CODE BEGIN========================

//Test endpoint - localhost:9000 (running sever port) will send the response back
// app.get('/login', (req, res) => {
//   return res.status(200).send('Testing');
// });
//End test endpoint

app.use('/users', usersRouter);
app.use('/projects', projectsRouter);

//RJ - ENDPOINT CODE END========================

app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //logging error message
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
