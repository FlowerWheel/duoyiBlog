'use strict';

var express   = require('express');
var BBPromise = require('bluebird');
var weibo     = require('../controllers/weibo');
var comment   = require('../controllers/comment');
var router    = express.Router();

function proxy(func) {
  return function (req, res, next) {
    // 使用Promise连接
    BBPromise.resolve()
      .then(function () {
        return func(req, res, next);
      })
      .then(function (data) {
        res.json({code: 200, data: data});
      })
      .catch(function (error) {
        res.json({error: error.message || error});
      });
  }
}

// router get扩展
router.getEx = function (path, func) {
  router.get(path, proxy(func));
};

// router post扩展
router.postEx = function(path, func) {
  router.post(path, proxy(func));
};

// 微博
router.getEx('/weibo', weibo.getWeibo);
// 评价微博
router.postEx('/comment/:weiboID', comment.addComment);

module.exports = router;
