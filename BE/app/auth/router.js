var express = require('express');
var router = express.Router();
const { signup } = require('./controller');

router.post('/signup', signup);

module.exports = router;