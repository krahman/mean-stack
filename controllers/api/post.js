'use strict';

var Post = require('../../models/post');

module.exports = function(app) {
  app.get('/api/posts', function (req, res, next) {
    Post.find()
      .sort('-date')
      .exec(function(err, posts) {
        if(err) { return next(err); }
        res.json(posts);
      });
  });

  app.post('/api/posts', function (req, res, next) {
    console.log('post received!');
    if (!req.body) return res.sendStatus(400);
    var post = new Post({
      username: req.body.username,
      body: req.body.body
    });
    post.save(function (err, post) {
      if (err) return next(err);
      res.status(201).json(post);
    });
  });
};
