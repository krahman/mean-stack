module.exports = function (config) {
  config.set({
    basePath: './',
    files: [
      'app/components/angular/angular.js'
    ],
    autoWatch: true,
    framework: ['jasmine'],
    browsers: ['Chrome'],
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ]
  });
};
