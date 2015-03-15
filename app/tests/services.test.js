'use strict';

describe('posts.svc', function() {
  beforeEach(module('meanStack.services'));
  var PostsSvc,
    $httpBackend;

  beforeEach(inject(function(_PostsSvc_, _$httpBackend_) {
    PostsSvc = _PostsSvc_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function() {
    $httpBackend.flush();
  });

  describe('#fetch', function() {

    beforeEach(function() {
      $httpBackend.expect('GET', '/api/posts')
        .respond([
          {title: 'First post', username:'khal', body: 'Node Rocks!'},
          {title: 'Second post', username:'khal', body: 'Node Rocks!'}
        ]);
    });

    it('gets 2 posts', function() {
      PostsSvc.fetch().success(function(posts) {
        expect(posts).to.have.length(2);
      });
    })
  });
});

