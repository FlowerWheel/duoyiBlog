'use strict';

var db = require('../models');



module.exports = {
  getWeibo: getWeibo
};

function getWeibo(req, res, next) {
  return db.Weibo.findAndCount();
//     return db.Weibo.findAndCount().
//       then(data){
//    return next({name:'',msg:""})
//  }
//    .then(function (weibo) {
//      res.json({data: weibo});
//    })
//    .catch(function (error) {
//      res.json({error: error});
//    });
}
