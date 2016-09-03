'use strict';

var front = require('./front');
var api   = require('./api');

module.exports = function (app) {
  // 前端
  app.use('/', front);
  // 接口
  app.use('/api', api);
};
