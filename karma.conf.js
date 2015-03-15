module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai', 'sinon-chai'],
    files: [
      'app/components/angular/angular.js',
      'app/components/angular-route/angular-route.js',
      'app/components/angular-mocks/angular-mocks.js',
      'app/*.js',
      'app/js/controllers/*.js',
      'app/js/services/*.js',
      'app/tests/*.test.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
