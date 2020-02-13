import { Config, browser } from "protractor"

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
//var  reporter require()
export let config: Config = {
    framework: "jasmine",
    // framework: 'custom',
    // frameworkPath: require.resolve('protractor-cucumber-framework'),
    //you can use directConnect if you dont want to start your selenium server each time.
    // directConnect:true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/V4_Utilities_Single.js'],


    capabilities: {
        //no need to specify path as it is set up in project
        // browserName: 'chrome',

        browserName: 'firefox'

    },


    /*multiCapabilities: [{
        'browserName': 'chrome',
      },
      {
        'browserName': 'firefox'
      }],*/
    // OnPrepare can aso be used to set up yor log in information.
    // its executed once and used across all tests
    onPrepare: () => {
        Jasmine2HtmlReporter
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './reporting/reports',
            takeScreenshots: true,
            takeScreenshotOnlyOnFailures: true,
            fileName: 'FailedReports',
            fileNameSeperator: "_",
            showsPassed: false,
            cleanDestination: false,
            fixedScreenshotName: true,


        }))
        var os = require('os');
        browser.manage().window().maximize;
        //you can set up implicit waits.
        browser.manage().timeouts().implicitlyWait(14000);
    },





    /*  jasmineNodeOpts: {
         showColors: true,
         includeStackTrace: true,
         defaultTimeoutInterval: 100000
        }
  */
}