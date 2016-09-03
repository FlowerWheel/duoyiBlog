'use strict';

module.exports = function (router) {
  router.map({
    '/list': {
      name: 'weiboList',
      component: require('./views/weibo-list.vue')
    }
  });
  
  router.redirect({
    '*': '/list'
  });
};