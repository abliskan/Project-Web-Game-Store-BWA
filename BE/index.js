const express = require('express');
const router = require('./routers');
const app = express();
const port = 4000;

const myLogger = function (req, res, next) {
    console.log('USER HAS LOG IN');
    next();
}

app.use(myLogger);

app.use(router);

app.listen(port, ()  => {
    console.log(`Example app listening at http://localhost:${port}`);
})