var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  // multiCapabilities: [{
  //   browserName: 'firefox',
  // }, {
  //   browserName: 'chrome'
  // }],

  framework: 'jasmine',

  specs: ['./e2e/**/*.e2e-spec.js'],

  baseUrl: 'http://localhost:8080',

  // For Angular2 tests
  useAllAngular2AppRoots: true,

  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayDuration: true
      }
    }));
  }
};
