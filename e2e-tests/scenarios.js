'use strict';

describe('mean stack', function() {

  browser.get('index.html');

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });


  describe('home', function() {

    beforeEach(function() {
      browser.get('/');
    });


    it('should render home when user navigates to /#/home', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/Home/);
    });

  });
});