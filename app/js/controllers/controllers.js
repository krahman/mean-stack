'use strict';

angular.module('meanStack.controllers', [])
  .controller('HomeCtrl', function (PostsSvc, $scope) {
    $scope.posts = [];
    PostsSvc.fetch()
      .success(function (posts) {
        $scope.posts = posts;
      });
    $scope.getPosts = function() {
      return $scope.posts;
    }
  });