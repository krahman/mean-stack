'use strict';

// Declare app level module which depends on views, and components
angular.module('meanStack', [
  'ngRoute',
  'meanStack.home'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);