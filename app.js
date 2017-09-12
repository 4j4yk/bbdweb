var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');
var mongoosePaginater = require('mongoose-paginater');
var session = require('express-session');
var passport = require('passport');
var expressValidator = require('express-validator');
var flash = require('connect-flash');


var userRoutes = require('./routes/user');
var routes = require('./routes/index');


var app = express();
// use this if putting on heroku kind of platform and configure mongo_atlas_uri with mongo path
// var url = process.env.MONGODB_URI;
var url = process.env.MONGODB_URI || 'mongodb://localhost/nbi';
mongoose.Promise = global.Promise;
mongoose.connect(url, {
    useMongoClient: true,
    /* other options */
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//
require('./config/passport');

// view engine setup
app.engine('.hbs', expressHbs({ defaultLayout: 'layout', extname: '.hbs' }));
app.set('view engine', '.hbs');

// un comment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(session({ secret: 'mysupersecret', resave: false, saveUninitialized: false }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));
//
app.use(function(req, res, next) {
    res.locals.login = req.isAuthenticated();
    next();
});
app.use('/user', userRoutes);
app.use('/', routes);
app.use('/data', routes);

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
