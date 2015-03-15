'use strict';

describe('meanStack', function () {

  var $controller;
  var $scope;

  beforeEach(function () {
    angular.mock.module('meanStack.controllers');
  });
  beforeEach(function () {
    angular.mock.module('meanStack.services');
  });

  describe('Home Controller: ', function () {

    beforeEach(angular.mock.inject(function (_$controller_, $rootScope) {
      $controller = _$controller_;
      $scope = $rootScope.$new();
    }));

    it('HomeCtrl should be defined', function () {
      var homeCtrl = $controller('HomeCtrl', {
        'PostSvc': function () {
        }, '$scope': $scope
      });
      expect(homeCtrl).toBeDefined();

    });

    it('$scope.posts should be an array', function () {
      //expect($scope.getPosts).toHaveBeenCalled();
    });
  });


});