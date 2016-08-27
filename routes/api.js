'use strict';

var express = require('express');
var router  = express.Router();

// test
router.get('/', function(req, res, next) {
  res.json({api: 'ok'});
});

module.exports = router;
