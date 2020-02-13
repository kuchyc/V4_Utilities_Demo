import { browser, element, by } from "protractor"

export class Results {

    //elecSupplier = element(by.id('provider_1'));
    
    switchBtn = element(by.buttonText('Switch'));


 
  
 
    swithcProvider() {
        
        this.switchBtn.click();
        //browser.sleep(4000);
        //page will move to https://test-experian.runpath.com/gas-electricity#/switch
    }
    
      }
    



