'use strict'


describe('posts.ctrl', function () {
  beforeEach(module('meanStack.controllers'));

  var $scope;

  var mockPostsSvc = {};

  beforeEach(inject(function ($q) {

    // Fetch
    mockPostsSvc.fetch = function () {
      var deferred = $q.defer();
      deferred.resolve([
        {title: 'First post', username: 'khal', body: 'Node Rocks!'},
        {title: 'Second post', username: 'khal', body: 'Node Rocks!'}
      ]);
      return deferred.promise;
    };

    // Create
    mockPostsSvc.create = function () {
      var deferred = $q.defer();
      deferred.resolve();
      return deferred.promise;
    };

  }));

  beforeEach(inject(function ($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controller('PostsCtrl', {
      $scope: $scope,
      PostsSvc: mockPostsSvc
    });
  }));

  it('loads posts from the service', function () {
    $scope.$digest();
    expect($scope.posts).to.have.length(2);
  });

  it('sends a new post to the service', function () {
    sinon.spy(mockPostsSvc, 'create');
    $scope.post = {
      username: 'khal',
      title: 'my n post',
      body: 'my new post'
    };
    $scope.addPost();
    expect(mockPostsSvc.create).to.have.been.calledWith({
      username: 'khal',
      title: 'my n post',
      body: 'my new post'
    });
  });
});