'use strict';

var front = require('./front');
var api   = require('./api');

function routes(app) {
  // 前端
  app.use('/', front);
  // 接口
  app.use('/api', api);
}

module.exports = routes;
