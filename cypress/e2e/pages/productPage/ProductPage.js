/*
* Autor: Alexandra Tr.
* Fecha: 2024-09-08
* Descripción:  POM General Class to ProductPage 
* Versión: 1.0
* */
import Page from '../helperPage/Page';
import { Assertions } from '../../pages/helperPage/Assertions';

const page = new Page


class ProductPage extends Page {
    constructor() {
        const elements = {
            productLbl: () => cy.contains('Products'),
            productsByImages: () => cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a'),
            viewCartBtn: () => cy.contains('View Cart'),
            addToCartBtn: () => cy.contains('Add to cart'),
            quantityProductImput: () => cy.get('#quantity'),
            proceedCheckoutBtn: () => cy.get('.col-sm-6 > .btn'),
            checkoutProductLbl: () => cy.get('.modal-title'),
            //data new user
            checkBox: () => cy.get(':nth-child(3) > .top'),
            passwordImput: () => cy.getcy.get('[data-qa="password"]'),
            dayImput: () => cy.get('[data-qa="days"]'),
            monthsImput: () => cy.get('[data-qa="months"]'),
            yearsdImput: () => cy.get('[data-qa="years"]'),
            passwordImput: () => cy.get('#newsletter'),
            optionImput: () => cy.get('#optin'),
            nameImput: () => cy.get('[data-qa="first_name"]'),
            lastNameImput: () => cy.get('[data-qa="last_name"]'),
            option2Imput: () => cy.get('form > :nth-child(13)'),
            addressImput: () => cy.get('[data-qa="address"]'),
            address2Imput: () => cy.get('[data-qa="address2"]'),
            countryImput: () => cy.get('[data-qa="country"]'),
            stateImput: () => cy.get('[data-qa="state"]'),
            cityImput: () => cy.get('[data-qa="city"]'),
            sipCodeImput: () => cy.get('[data-qa="zipcode"]'),
            mobilNumberImput: () => cy.get('[data-qa="mobile_number"]'),
            createAccountBtn: () => cy.get('[data-qa="create-account"]'),
            createAccountLbl: () => cy.get('b'),
            loginSucesstLbl: () => cy.get('#header '),
            toOrder: () => cy.get(':nth-child(7) > .btn'),
            accountCreateLbl: 'Congratulations!',




        }
        super(elements);

    }

    clickProductLbl() {
        this.elements.productLbl().click()

    }

    clickProductsByImages() {
        this.elements.productsByImages().click()
    }

    clickAddToCartBtn() {
        this.elements.addToCartBtn().click()
    }

    clickViewCartBtn() {
        this.elements.viewCartBtn().click()
    }

    fillQuantityProductImput() {
        cy.randomQuantity().then((quantity) => {
            cy.log('Cantidad generada:', quantity);
            this.elements.quantityProductImput().clear().type(quantity);
        });
    }

    clickProceedCheckoutBtn() {
        this.elements.proceedCheckoutBtn().click();

    }



    // data new user 
    fillCheckBox() {
        page.forceTypesendKeyByElement(this.elements.checkBox, 'checked');
    }

    fillPasswordInput(password) {
        page.forceTypesendKeyByElement(this.elements.passwordInput, password);
    }

    fillDayInput(day) {
        page.forceTypesendKeyByElement(this.elements.dayInput, day);
    }

    fillMonthsInput(month) {
        page.forceTypesendKeyByElement(this.elements.monthsInput, month);
    }

    fillYearsInput(year) {
        page.forceTypesendKeyByElement(this.elements.yearsInput, year);
    }

    fillNewsletterInput(checked) {
        page.forceTypesendKeyByElement(this.elements.newsletterInput, checked);
    }

    fillOptionInput(checked) {
        page.forceTypesendKeyByElement(this.elements.optionInput, checked);
    }

    fillNameInput(name) {
        page.forceTypesendKeyByElement(this.elements.nameInput, name);
    }

    fillLastNameInput(lastName) {
        page.forceTypesendKeyByElement(this.elements.lastNameInput, lastName);
    }

    fillOption2Input(option) {
        page.forceTypesendKeyByElement(this.elements.option2Input, option);
    }

    fillAddressInput(address) {
        page.forceTypesendKeyByElement(this.elements.addressInput, address);
    }

    fillAddress2Input(address2) {
        page.forceTypesendKeyByElement(this.elements.address2Input, address2);
    }

    fillCountryInput(country) {
        page.forceTypesendKeyByElement(this.elements.countryInput, country);
    }

    fillStateInput(state) {
        page.forceTypesendKeyByElement(this.elements.stateInput, state);
    }

    fillCityInput(city) {
        page.forceTypesendKeyByElement(this.elements.cityInput, city);
    }

    fillZipCodeInput(zipCode) {
        page.forceTypesendKeyByElement(this.elements.zipCodeInput, zipCode);
    }

    fillMobileNumberInput(mobileNumber) {
        page.forceTypesendKeyByElement(this.elements.mobileNumberInput, mobileNumber);
    }

    fillCreateAccountBtn() {
        page.forceTypesendKeyByElement(this.elements.createAccountBtn, '');
    }

    clickToOrder() {
        cy.wait(1000);
        this.elements.toOrder().click();
    }

    clickPayBtn() {
        cy.scrollTo(0, 500);
        this.elements.payBtn().click();

    }

    // validation
    validateCheckoutProductLbl() {
        return cy.get(this.elements.checkoutProductLbl);
    }

    validateCreateAccountLbl() {
        return cy.get(this.elements.createAccountLbl);
    }
    validateLoginSucesstLbl() {
        return cy.get(this.elements.loginSucesstLbl);
    }

    validateCheckoutProductLbl() {
        Assertions.expectElementIsPresentById(this.elements.checkoutProductLbl);

    }
    validateAccountCreateLbl() {
        Assertions.expectElementIsPresentById(this.elements.accountCreateLbl);

    }




}
module.exports = new ProductPage();