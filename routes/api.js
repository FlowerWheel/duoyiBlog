'use strict';

var express = require('express');
var weibo   = require('../controllers/weibo');
var router  = express.Router();


function proxy(func){
  return function(req,res,next){
    func(req,res,next)
      .then(function (data) {
        res.json({code:0,msg: data});
      })
      .catch(function (error) {
        res.json({error: error});
      });
  }
}

//router get扩展
router.getEx=function(path,func) {
  router.get(path,proxy(func))
}

//router post扩展
router.postEx=function(path,func) {
  router.post(path,proxy(func))
}


// test
router.get('/', function(req, res, next) {
  res.json({api: 'ok'});
});

// 微博
router.getEx('/weibo', weibo.getWeibo);

module.exports = router;
