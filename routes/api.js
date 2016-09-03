'use strict';

var express   = require('express');
var BBPromise = require('bluebird');
var weibo     = require('../controllers/weibo');
var comment   = require('../controllers/comment');
var router    = express.Router();

function proxy(fn) {
  return function (req, res, next) {
    // 使用Promise连接
    BBPromise.resolve()
      .then(function () {
        return fn(req, res, next);
      })
      .then(function (data) {
        res.json({code: 200, msg: data});
      })
      .catch(function (error) {
        res.json({error: error.message || error});
      });
  };
}

var methods = ['get', 'post', 'patch', 'delete'];
// router方法扩展
methods.map(function (method) {
  var ext = method + 'Ext';
  router[ext] = function (path, fn) {
    router[method](path, proxy(fn));
  }
});

// 微博
router.getExt('/weibo', weibo.list);
// 评论微博
router.postExt('/comment/:weiboID', comment.add);
// 删除评论
router.deleteExt('/comment/:commentID', comment.remove);

module.exports = router;
