const createError = require('http-error');
const express = require('express');
const router = require('./app/category/routers');
const path = require('path');
const cookieParser = require('cookie-parser');

const port = 4000;

const dashboardRouter = require('./app/dashboard/router')
const categoryRouter = require('./app/category/router');

const app = express();

const myLogger = function (req, res, next) {
    console.log('USER HAS LOG IN');
    next();
}

app.use(myLogger);

app.listen(port, ()  => {
    console.log(`Example app listening at http://localhost:${port}`);
})

// view engine setup 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/adminlte', express.static(path.join(__dirname, '/node_modules/admin-lte/')));

app.use('/', dashboardRouter);
app.use('/app/category', categoryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error development 
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});