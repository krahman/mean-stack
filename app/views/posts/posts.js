'use strict';

angular.module('meanStack.posts', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/posts', {
      templateUrl: 'views/posts/index.html',
      controller: 'PostsCtrl'
    });
    $routeProvider.when('/posts/add', {
      templateUrl: 'views/posts/add.html',
      controller: 'PostsCtrl'
    });
  }]);
