'use strict';

angular.module('meanStack.controllers', [])
  .controller('PostsCtrl', function ($scope, PostsSvc) {

    $scope.addPost = function() {
      if($scope.post.body) {
        PostsSvc.create({
          title: $scope.post.title,
          body: $scope.post.body
        })
          .then(function() {
            $scope.post.body = null;
            $scope.post.title = null;
          });
      }
    };

    PostsSvc.fetch()
      .then(function (posts) {
        $scope.posts = posts;
      });

    $scope.$on('ws:new_post', function(_, post) {
      $scope.$apply(function() {
        $scope.posts.unshift(post);
      });
    });
  });