'use strict';

var BBPromise = require('bluebird');
var db        = require('../models');
var reject    = BBPromise.reject;

module.exports = {
  getWeibo: getWeibo
};

function getWeibo(req, res, next) {
  return db.Weibo.findAndCount();
}
