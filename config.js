var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  framework: 'jasmine', // testing framework used
  seleniumAddress: 'http://172.17.0.2:4444/wd/hub',
  specs: ['tests/FirstTest.js'], // test case file
  capabilities: {
  'browserName': 'firefox'
},

  onPrepare: function() {
// Add a screenshot reporter and store screenshots to `/Reports/screenshots`:
jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'Reports'
      }).getJasmine2Reporter());
   }
};
