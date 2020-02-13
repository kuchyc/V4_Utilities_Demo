// export class CustomLocators() {

		
//     protractor.By.addLocator('e2eId', (toState, opt_parentElement) => {
//         const using = opt_parentElement || document;
//         const possibleAnchors = using.querySelectorAll('*[ta-e2e-id="' + toState +'"]');
//         let result = null;
//         if (possibleAnchors.length === 1) {
//              result = possibleAnchors[0];
//          } else  if (possibleAnchors.length > 1) {
//              result = possibleAnchors;
//          }
 
//          return result;
//      });
