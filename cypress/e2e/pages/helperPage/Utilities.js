/*
* Autor: Alexandra Tr.
* Fecha: 2024-09-08
* Descripción:  utilities Class 
* Versión: 1.0
* */

import ProductPage from '../productPage/ProductPage';

export class Utilities {

  /**
    *  completePurchase Proceed
    * @param path 
    */
  completePurchase() {
    ProductPage.clickAddToCartBtn();
    ProductPage.clickViewCartBtn();
    ProductPage.clickProceedCheckoutBtn();
    cy.wait(5000);
    cy.scrollTo(0, 500);
    ProductPage.clickToOrder();
  }

  fillCardData () {
    ProductPage.fillNameCard('master');
    ProductPage.fillNumberCard('10617336');
    ProductPage.fillCvcCardInput('123');
    ProductPage.fillExpiryMonthInput('02');
    ProductPage.fillExpireYearInput('06'); 

};



}
export default Utilities;
