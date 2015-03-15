'use strict';

angular.module('meanStack.controllers', [])
  .controller('HomeCtrl', function (PostsSvc, $scope) {
    PostsSvc.fetch()
      .success(function (posts) {
        $scope.posts = posts;
      });
  })