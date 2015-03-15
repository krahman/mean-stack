'use strict';

angular.module('meanStack.controllers', [])
  .controller('PostsCtrl', function ($scope, PostsSvc) {
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