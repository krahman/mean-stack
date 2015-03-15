'use strict';

var Post = require('../../models/post');
var router = require('express').Router();

router.get('/api/posts', function (req, res, next) {
  Post.find()
    .sort('-date')
    .exec(function (err, posts) {
      if (err) {
        return next(err);
      }
      res.json(posts);
    });
});

router.post('/api/posts', function (req, res, next) {
  console.log('post received!');
  if (!req.body) return res.sendStatus(400);
  var post = new Post({
    title: req.body.title,
    username: req.body.username,
    body: req.body.body
  });
  post.save(function (err, post) {
    if (err) return next(err);
    res.status(201).json(post);
  });
});

module.exports = router;
