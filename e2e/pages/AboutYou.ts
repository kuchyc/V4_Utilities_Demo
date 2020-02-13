import { browser, element, by } from "protractor"

//use resolveJasonModule in tsconfig file to
import objrepo from "../objectrepo/objrepo.json"


export class AboutYou {

  postcode = element(by.id('postcodeInput'));
  elecTariffType = element(by.id('label_tariffType_electricity'));
  dualFuleNo = element(by.id('label_isDualFuel_no'));
  economy7No = element(by.id('label_isEconomy7_no'));
  consumptionNo = element(by.id('label_hasAccurateUsage_no'));
  continueBtn = element(by.buttonText('Continue'));
  clickAddress = element(by.buttonText('Find address'));
  selectAddress = element(by.xpath('//*[contains(text(),"80B High Street")]'));
  firstName = element(by.css('[data-qa-id="first-name"]')).element(by.css('[type="text"]'));
  //isJointNo = element(by.xpath('(//input[@type="radio"])[position()=2]'));
  isJointNo = element(by.id('isJoint0_1')).all(by.tagName('Is it a joint account? No')).get(0);



  enterAboutYouInfo(postcode:string) {
    element(by.id(objrepo.locators.aboutyou.postcode)).sendKeys(postcode);
    browser.sleep(1000);
    //this.postcode.sendKeys('B6 6HE');
    //browser.sleep(2000);
    element(by.id(objrepo.locators.aboutyou.elecTariffType)).click();    
  //this.elecTariffType.click();
    this.dualFuleNo.click();
    this.economy7No.click();
    this.consumptionNo.click();
    this.continueBtn.click();
   
  }

  getPageURL() {
          
    let currentURL = browser.getCurrentUrl()
    currentURL.then(function (txt) {
                 
      console.log("Current URL :- " + txt);

    });
   

}

}
