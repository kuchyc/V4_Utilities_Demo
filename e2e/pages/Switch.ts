import { browser, element, by } from "protractor"

export class Switch {

    elecSupplier = element(by.id('provider_1'));
    elecPaymentMethod = element(by.id('paymentMethod_monthly'));
    elecEstimatedMedConsumption = element(by.id('estimatedElectricityUsage_medium'));
    billPaymentMethod = element(by.id('newPaymentMethod_monthly'));
    findDealBtn = element(by.buttonText('Find a better deal'));


  
 
    currentSupplierDetails() {
        this.elecSupplier.click();
        this.elecPaymentMethod.click();
        this.elecEstimatedMedConsumption.click();
        this.billPaymentMethod.click();
        this.findDealBtn.click();
        //browser.sleep(4000);
        //page will move to https://test-experian.runpath.com/gas-electricity#/results
    }
    
      }
    



