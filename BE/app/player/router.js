var express = require('express');
var router = express.Router();
const { landingPage, detailPage, category, checkout } = require('./controller');

router.get('/landingpage', landingPage);
router.get('/:id/detail', detailPage);
router.get('/category', category);
router.get('/checkout', checkout);

module.exports = router;