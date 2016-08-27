'use strict';

var db = require('../models');

module.exports = {
  getWeibo: getWeibo
};

function getWeibo(req, res, next) {
  db.Weibo.findAndCount()
    .then(function (weibo) {
      res.json({data: weibo});
    })
    .catch(function (error) {
      res.json({error: error});
    });
}
