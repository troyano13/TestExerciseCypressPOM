/*
* Autor: Alexandra Troyano
* Fecha: 2024-09-08
* Descripción:  Class for purchasing products with user and without user
* Versión: 1.0
* */

import ProductPage from '../../pages/productPage/ProductPage';
import LoginPage from '../../pages/loginPage/LoginPage'
import Utilities from '../../pages/helperPage/Utilities';
import { Assertions } from '../../pages/helperPage/Assertions';
import { loginAdmin, goToPage, url } from '../login/loginGeneral';


let dataCliente = [];

const dataQA = [
  { user: 'ADMIN', name: 'Jose' },

];
const dataDev = [
  { user: 'ADMIN', name: 'Jose' },
];


if (url.includes('aut')) {
  dataCliente = dataQA;
} else {
  dataCliente = dataDev;
}


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
      ProductPage.clickPayBtn();
      ProductPage.validateCheckoutProductLbl();

    });

    it(`Product purchase with logging  ${data.email}`, () => {

      LoginPage.fillSignupNameTxt();
      LoginPage.fillSignupEmailTxt();
      LoginPage.clickSignupBtn();
      // new user form
      ProductPage.checkBox();
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
      ProductPage.fillCreateAccountBtn();
      ProductPage.validateCreateAccountLbl();

    });



  });
});

