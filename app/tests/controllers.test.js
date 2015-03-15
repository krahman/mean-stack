'use strict'

describe('posts.ctrl', function() {
  beforeEach(module('meanStack.controllers'));

  var $scope;

  var mockPostsSvc = {};

  beforeEach(inject(function($q) {
    mockPostsSvc.fetch = function() {
      var deferred = $q.defer();
      deferred.resolve([
        {title: 'First post', username:'khal', body: 'Node Rocks!'},
        {title: 'Second post', username:'khal', body: 'Node Rocks!'}
      ]);
      return deferred.promise;
    };
  }));

  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controller('PostsCtrl', {
      $scope: $scope,
      PostsSvc: mockPostsSvc
    });
  }));

  it('loads posts from the service', function() {
    $scope.$digest();
    expect($scope.posts).to.have.length(2);
  });
});