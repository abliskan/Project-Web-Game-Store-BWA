const express = require('express');
const router = express.Router();
const { viewSignin } = require('./controller');

router.get('/', viewSignin);

module.exports = router;