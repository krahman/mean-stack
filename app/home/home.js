'use strict';

angular.module('meanStack.home', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'home/index.html',
      controller: 'HomeCtrl'
    });
  }])

  .controller('HomeCtrl', [function () {

  }]);