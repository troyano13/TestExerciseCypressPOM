/*
* Autor: Alexandra Tr.
* Fecha: 2024-09-08
* Descripción:  General Class to login for login
* Versión: 1.0
* */

import ProductPage from '../../pages/productPage/ProductPage';
import Login from '../../pages/loginPage/LoginPage'
import { Assertions } from '../../pages/helperPage/Assertions';


const email = Cypress.env('USER_EMAIL_ADMIN');
const password = Cypress.env('USER_PASSWORD');
const url = Cypress.env('url');
const assertions = new Assertions


const loginAdmin = () => {

    Login.fillLoginEmailTxt(email);
    Login.fillLoginPasswordTxt(password);
    Login.clickLoginButtonBtn();
    ProductPage.validateLoginSucesstLbl();

};

const goToPage = () => {

    cy.visit(`${url}/login`);

};


export { loginAdmin, goToPage, url };