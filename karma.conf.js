module.exports = function(config) {
  config.set({
    // Karma configuration

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // list of files / patterns to load in the browser
    files: [

      'libs/angular/angular.js',
      'libs/angular-animate/angular-animate.js',
      'libs/angular-loader/angular-loader.js',
      'libs/angular-mocks/angular-mocks.js',
      'libs/angular-route/angular-route.js',
      "libs/ngstorage/ngStorage.js",
      'js/src/**/*.js',
      'test/unit/*.js'
    ],

    preprocessors: {
      'modules/**/views/*.html': ['html2js']
    },

    frameworks: [
      'jasmine'
    ],

    // list of files to exclude
    exclude: [],

    // test results reporter to use
    // possible values: dots || progress || growl
    reporters: ['progress', 'coverage'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'js/src/**/*.js': ['coverage']
    },

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    // web server port
    port: 8080,

    // cli runner port
    runnerPort: 9100,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 5000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true

  });
};