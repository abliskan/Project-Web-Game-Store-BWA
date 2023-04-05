const express = require('express');
const router = express.Router();
const { viewSignin, actionSignin, actionLogout } = require('./controller');

router.get('/', viewSignin);
router.post('/', actionSignin);
router.post('/logout', actionLogout);

module.exports = router;