var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var webpack = require('webpack')
var WebpackDevMiddleware = require('webpack-dev-middleware')
var WebpackHotMiddleware = require('webpack-hot-middleware')
var config=require('./webpack.config');
config.entry.app.unshift('react-hot-loader/patch');
config.entry.app.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000')
// config.entry.app.unshift('webpack-dev-server/client?http://127.0.0.1:5000');
// config.entry.app.unshift('webpack/hot/only-dev-server');
//config.module.loaders[0].loaders.unshift('react-hot');
var compiler=webpack(config);
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(WebpackDevMiddleware(compiler, {
    publicPath: "",
    stats: { colors: true }
}))
app.use(WebpackHotMiddleware(compiler, {
    log: console.log
}))
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});






module.exports = app;
