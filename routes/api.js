'use strict';

var express = require('express');
var weibo   = require('../controllers/weibo');
var router  = express.Router();

// test
router.get('/', function(req, res, next) {
  res.json({api: 'ok'});
});
// 微博
router.get('/weibo', weibo.getWeibo);

module.exports = router;
