module.exports = function (config) {
  config.set({
    logColors: true,
    files: [
      'app/components/angular/angular.js',
      'app/components/angular-route/angular-route.js',
      'app/components/angular-mocks/angular-mocks.js',
      'app/*.js',
      'app/js/controllers/*.js',
      'app/js/services/*.js',
      'app/tests/*.test.js'
    ],
    autoWatch: true,
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],
    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
