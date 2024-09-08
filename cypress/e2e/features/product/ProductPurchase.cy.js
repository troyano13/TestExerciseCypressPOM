/*
* Autor: Alexandra Troyano
* Fecha: 2024-09-08
* Descripción:  Class for purchasing products with user and without user
* Versión: 1.0
* */

import ProductPage from '../../pages/productPage/ProductPage';
import Utilities from '../../pages/helperPage/Utilities';
import { Assertions } from '../../pages/helperPage/Assertions';
import { loginAdmin, goToPage } from '../login/loginGeneral.cy';


let dataCliente = [];

const dataQA = [
  { user: 'ADMIN', name: 'Jose' },

];


describe(`Product purchase`, () => {

  beforeEach(() => {
    goToPage();

  });
  const utilities = new Utilities();
  const assertions = new Assertions();

  dataCliente.forEach((data) => {

    it(`Login user ADMIN`, () => {
      loginAdmin();

    });

    it(`Product purchase with ${data.user}`, () => {

      loginAdmin();
      ProductPage.clickProductLbl();
      ProductPage.clickProductsByImages();
      ProductPage.fillQuantityProductImput();
      utilities.completePurchase();
      utilities.fillCardData();
      ProductPage.clickPayBtn() ; 
      ProductPage.validateCheckoutProductLbl();

    });

    it(`Product purchase with logging  ${data.email}`, () => {

      ProductPage.fillSignupNameTxt();
      ProductPage.fillSignupEmailTxt();
      productPage.clickLoginButtonBtn();
      // new user form
      ProductPage.fillNameInput('John');
      ProductPage.fillLastNameInput('Doe');
      ProductPage.fillPasswordInput('password123');
      ProductPage.fillDayInput('15');
      ProductPage.fillMonthsInput('March');
      ProductPage.fillYearsInput('1990');
      ProductPage.fillAddressInput('123 Main St');
      ProductPage.fillCityInput('New York');
      ProductPage.fillStateInput('NY');
      ProductPage.fillZipCodeInput('10001');
      ProductPage.fillMobileNumberInput('1234567890');
      ProductPage.fillCheckBox();
      ProductPage.fillCreateAccountBtn();
      assertions.expectElementIsPresent(ProductPage.validateCreateAccountLbl, 'Congratulations');

    });

   



  });
});

