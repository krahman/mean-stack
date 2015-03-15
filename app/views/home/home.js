'use strict';

angular.module('meanStack.home', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'views/home/index.html',
      controller: 'HomeCtrl'
    });
  }]);
