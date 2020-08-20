var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  framework: 'jasmine', // testing framework used
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/FirstTest.js'], // test case file
  multiCapabilities: [{
    browserName: 'firefox'
  },
  //{
    //browserName: 'chrome'
  //}
  ],

  onPrepare: function() {
// Add a screenshot reporter and store screenshots to `/Reports/screenshots`:
jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'Reports'
      }).getJasmine2Reporter());
   }
};
