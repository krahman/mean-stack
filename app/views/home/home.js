'use strict';

angular.module('meanStack.home', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'views/home/index.html',
      controller: 'HomeCtrl'
    });
  }])

  .controller('HomeCtrl', ['$http', '$scope', function ($http, $scope) {
    $http.get('/api/posts').success(function(posts) {
      $scope.posts = posts;
    });
  }]);
