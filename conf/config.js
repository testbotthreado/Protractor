exports.config = {
  framework: 'jasmine', // testing framework used
  seleniumAddress: 'http://172.17.0.2:4444/wd/hub', // miqsel tool - remove selenium server
  specs: ['FirstTest.js'], // test case file
  capabilities: {
    browserName: 'firefox'
  }
};