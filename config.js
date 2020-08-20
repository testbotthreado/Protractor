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
  ]
};
