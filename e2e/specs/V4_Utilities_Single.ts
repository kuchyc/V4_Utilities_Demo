import { browser, element, by } from "protractor"
import { AboutYou } from "../pages/AboutYou"
import objrepo from "../objectrepo/objrepo.json"
import { BasePage } from "../base/basepage"
import { CurrentSupplier } from "../pages/CurrentSupplier"


//describe acepts 2 parameters - The name  of the suite and the fucntion
describe("V4 Utilities Test Functionality", function () {
    
// thi will execute before each 'it' block
    beforeAll(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 2500000;
    });
    let aboutyou = new AboutYou;
    let basepage = new BasePage;
    let currentsupplier = new CurrentSupplier;

    beforeEach(function () {
        basepage.navigateToURL(objrepo.testurl);
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize;
    })
    //it block accepts 2 parameters, description and function - this is a test case
    it("Single Fuel Electricity", function () {

        aboutyou.enterAboutYouInfo(objrepo.locators.aboutyou.testdata.postcode);
        browser.sleep(4000)
        aboutyou.getPageURL();
        expect(browser.getCurrentUrl()).toContain(objrepo.currentsupurl);
        currentsupplier.currentSupplierDetails();


    })

    it("Enter current supplier information", function () {
        // aboutyou.enterAboutYouInfo();
        // currentsupplier.currentSupplierDetails();
    })
   
    /* it("should select nd log in to bank accout", function(){
        banklist.selectBankAAcc();
    }) */

})


