'use strict';

// Declare app level module which depends on views, and components
angular.module('meanStack', [
  'ngRoute',
  'meanStack.home',
  'meanStack.services',
  'meanStack.controllers'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);