/*
* Author: Alexandra Tr.
* Date: 2024-09-08
* Description: Page Object Model for login
* Version: 1.0
* */
import Page from '../helperPage/Page';
const page = new Page


class login extends Page {


    constructor() {
        const elements = {
            // login new user 
            signupNameTxt: () => cy.get('[data-qa="signup-name"]'),
            signupEmailTxt: () => cy.get('[data-qa="signup-email"]'),
            signupBtn: () => cy.get('[data-qa="signup-button"]'),
            // login user 
            loginEmailTxt: '[data-qa="login-email"]',
            loginPasswordTxt: '[data-qa="login-password"]',
            loginButtonBtn: () => cy.get('[data-qa="login-button"]'),

        }
        super(elements);
    }

    // login new user 
    fillSignupNameTxt() {
        cy.newUserNameFake().then((userName) => {
            cy.log('UserNAme:', userName);
            this.elements.signupNameTxt().clear().type(userName);
        });
    }

    fillSignupEmailTxt() {
        cy.newEmailFake().then((email) => {
            cy.log('Email:', email);
            this.elements.signupEmailTxt().clear().type(email);
        });
    }

    clickSignupBtn() {
        this.elements.clickByElementForce().click()
    }

    // login user 
    fillLoginEmailTxt(email) {
        page.forceTypesendKeyByElement(this.elements.loginEmailTxt, email);
    }

    fillLoginPasswordTxt(password) {
        page.forceTypesendKeyByElement(this.elements.loginPasswordTxt, password);

    }
    clickLoginButtonBtn() {
        this.elements.loginButtonBtn().click()

    }
}
module.exports = new login();