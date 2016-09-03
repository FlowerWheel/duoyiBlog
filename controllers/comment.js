'use strict';

var BBPromise = require('bluebird');
var db        = require('../models');
var reject    = BBPromise.reject;

module.exports = {
  addComment: addComment
};

function addComment(req, res, next) {
  var weiboID = parseInt(req.params.weiboID) || 0;
  if (!weiboID) {
    return reject('缺少微博ID');
  }
  var content = req.body.content;
  if (!content) {
    return reject('缺少评论内容');
  }
  content = content.trim();
  if (!content) {
    return reject('评论内容不能为空');
  }
  // var userID = req.session.user.userID;
  var userID = 1;
  return db.Comment.create({
    commentContent: content,
    weiboID: weiboID,
    userID: userID
  });
}
