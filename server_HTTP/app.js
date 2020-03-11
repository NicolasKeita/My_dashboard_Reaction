const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const body = require('body-parser');
const path = require('path');

const indexRouter = require('./routes/index');
const trelloRouter = require('./routes/trello');
const registerRouter = require('./routes/register');
const bitcoinRouter = require('./routes/bitcoin');
const lolRouter = require('./routes/lol');
const marsRouter = require('./routes/mars');
const picturesRouter = require('./routes/pictures');
const pollutionRouter = require('./routes/pollution');
const sendEmailRouter = require('./routes/send-email');
const steamNewsRouter = require('./routes/steamNews');
const timeRouter = require('./routes/time');
const usersRouter = require('./routes/users');
const weatherRouter = require('./routes/weather');
const connectThroughGoogleRouter = require('./routes/connectThroughGoogle');
const getURL_toConnectToGoogleRouter = require('./routes/getURL_toConnectToGoogle');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: "cookie_secret",
    name: "cookie_name",
    resave: true,
    saveUninitialized: true
}));
app.use(body.json());
app.use(body.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public/")));

app.use('/', indexRouter);
app.use('/trello', trelloRouter);
app.use('/users', indexRouter);
app.use('/lol', lolRouter);
app.use('/bitcoin', bitcoinRouter);
app.use('/mars', marsRouter);
app.use('/pictures', picturesRouter);
app.use('/pollution', pollutionRouter);
app.use('/register', registerRouter);
app.use('/send-email', sendEmailRouter);
app.use('/steamNews', steamNewsRouter);
app.use('/time', timeRouter);
app.use('/users', usersRouter);
app.use('/weather', weatherRouter);
app.use('/connectThroughGoogle', connectThroughGoogleRouter);
app.use('/getURL_toConnectToGoogle', getURL_toConnectToGoogleRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    if (err.status)
        res.end("err status : " + err.status);
    else
        res.end("err status : 500");
});

module.exports = app;
