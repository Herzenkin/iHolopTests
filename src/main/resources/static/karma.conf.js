module.exports = function(config) {

  var appBase = 'app/'; // transpiled app JS and map files

  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-remap-istanbul')
    ],

    systemjs: {
      configFile: 'systemjs.config.js',
    },

    files: [
      // System.js for module loading
      'node_modules/systemjs/dist/system.src.js',

      // Polyfills
      'node_modules/core-js/client/shim.js',

      // zone.js
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs
      {
        pattern: 'node_modules/rxjs/**/*.js',
        included: false,
        watched: false
      },
      {
        pattern: 'node_modules/rxjs/**/*.js.map',
        included: false,
        watched: false
      },

      // Paths loaded via module imports:
      // Angular itself
      {
        pattern: 'node_modules/@angular/**/*.js',
        included: false,
        watched: false
      },
      {
        pattern: 'node_modules/@angular/**/*.js.map',
        included: false,
        watched: false
      },

      {
        pattern: './systemjs.config.js',
        included: false,
        watched: false
      },
      'karma-test-shim.js', // optionally extend SystemJS mapping e.g., with barrels

      // transpiled application & spec code paths loaded via module imports
      {
        pattern: appBase + '**/*.js',
        included: false,
        watched: true
      },

      // Asset (HTML & CSS) paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {
        pattern: appBase + '**/*.html',
        included: false,
        watched: true
      },
      {
        pattern: appBase + '**/*.css',
        included: false,
        watched: true
      },

      // Paths for debugging with source maps in dev tools
      {
        pattern: appBase + '**/*.ts',
        included: false,
        watched: false
      },
      {
        pattern: appBase + '**/*.js.map',
        included: false,
        watched: false
      }
    ],

    exclude: [],
    preprocessors: {
      'app/**/!(*.spec).js': ['coverage']
    },

    reporters: ['progress', 'kjhtml', 'coverage', 'karma-remap-istanbul'],

    // Generates code coverage report
    coverageReporter: {
      type: 'html',
      dir: 'code_coverage'
    },

    // Remaps js-coverage to ts-coverage
    remapIstanbulReporter: {
      reports: {
        html: 'code_coverage'
      }
    },

    // Prevents clearing results in main window of Task Runner
    client: {
      clearContext: false
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
