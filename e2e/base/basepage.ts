import { browser, element, by } from "protractor"
import { url } from "inspector";

export class BasePage {

    navigateToURL(url:string){
  
     browser.get(url);
  
    };
  
     getPageTitle() {
  
         return browser.getTitle();
  
     }
    }
