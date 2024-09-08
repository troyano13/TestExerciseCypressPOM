/*
* Autor: Alexandra Tr.
* Fecha: 2024-09-08
* Descripción:  POM General Class to ProductPage 
* Versión: 1.0
* */
import Page from '../helperPage/Page';
import { Assertions } from '../../pages/helperPage/Assertions';

const page = new Page
const assertsThat = new Assertions


class ProductPage extends Page {
    constructor() {
        const elements = {
            productLbl: () => cy.contains('Products'),
            productsByImages: () => cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a'),
            viewCartBtn: () => cy.contains('View Cart'),
            addToCartBtn: () => cy.contains('Add to cart'),
            quantityProductImput: () => cy.get('#quantity'),
            proceedCheckoutBtn: () => cy.get('.col-sm-6 > .btn'),
            toOrder: () => cy.get(':nth-child(7) > .btn'),
            checkoutProductLbl: 'Congratulations!',
            //data new user form
            checkBox: () => cy.get('#id_gender1'),
            passwordImput: '[data-qa="password"]',
            dayImput: '[data-qa="days"]',
            monthsImput: '[data-qa="months"]',
            yearsdImput: '[data-qa="years"]',
            optionImput: () => cy.get('#optin'),
            option2Imput: () => cy.get('#newsletter'),
            nameImput: '[data-qa="first_name"]',
            lastNameImput: '[data-qa="last_name"]',
            addressImput: '[data-qa="address"]',
            address2Imput: '[data-qa="address2"]',
            countryImput: '[data-qa="country"]',
            stateImput: '[data-qa="state"]',
            cityImput: '[data-qa="city"]',
            zipCodeImput: '[data-qa="zipcode"]',
            mobilNumberImput: '[data-qa="mobile_number"]',
            createAccountBtn: () => cy.get('[data-qa="create-account"]'),
            createAccountLbl: 'b',
            loginSucesstLbl: ' Logged in as',
            accountCreateLbl: 'Congratulations!',
            //data card
            nameCard: '[data-qa="name-on-card"]',
            numberCard: '[data-qa="card-number"]',
            cvcCard: '[data-qa="cvc"]',
            expiryMonth: '[data-qa="expiry-month"]',
            expireYear: '[data-qa="expiry-year"]',
            payBtn: () => cy.get('[data-qa="pay-button"]')


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

    clickToOrder() {
        cy.wait(1000);
        this.elements.toOrder().click();
    }

    //data card
    fillNameCard(lastName) {
        page.forceTypesendKeyByElement(this.elements.nameCard, lastName);
        return this;
    }

    fillNumberCard(lastName) {
        page.forceTypesendKeyByElement(this.elements.numberCard, lastName);
        return this;
    }

    fillCvcCardInput(lastName) {
        page.forceTypesendKeyByElement(this.elements.cvcCard, lastName);
        return this;
    }

    fillExpiryMonthInput(lastName) {
        page.forceTypesendKeyByElement(this.elements.expiryMonth, lastName);
        return this;
    }

    fillExpireYearInput(lastName) {
        page.forceTypesendKeyByElement(this.elements.expireYear, lastName);
        return this;
    }
    clickPayBtn() {
        cy.scrollTo(0, 500);
        this.elements.payBtn().click();
        return this;
    }

    // data new user 
    checkBox() {
        this.elements.checkBox().click()
    }

    fillPasswordInput(password) {
        page.forceTypesendKeyByElement(this.elements.passwordImput, password);
        ;
    }

    fillDayInput(day) {
        cy.get(this.elements.dayImput).select(day);

    }

    fillMonthsInput(month) {
        cy.get(this.elements.monthsImput).select(month);

    }

    fillYearsInput(year) {
        cy.get(this.elements.yearsdImput).select(year);

    }

    fillOptionInput() {
        this.elements.optionImput().click()

    }

    fillOption2Input() {
        this.elements.option2Imput().click()

    }
    fillNameInput(firstName) {
        page.forceTypesendKeyByElement(this.elements.nameImput, firstName);

    }

    fillLastNameInput(lastName) {
        page.forceTypesendKeyByElement(this.elements.lastNameImput, lastName);

    }


    fillAddressInput(address) {
        page.forceTypesendKeyByElement(this.elements.addressImput, address);

    }

    fillAddress2Input(address2) {
        page.forceTypesendKeyByElement(this.elements.address2Imput, address2);

    }

    fillCountryInput(country) {
        cy.get(this.elements.countryImput).select(country);

    }

    fillStateInput(state) {
        page.forceTypesendKeyByElement(this.elements.stateImput, state);

    }

    fillCityInput(city) {
        page.forceTypesendKeyByElement(this.elements.cityImput, city);

    }

    fillZipCodeInput(zipCode) {
        page.forceTypesendKeyByElement(this.elements.zipCodeImput, zipCode);

    }

    fillMobileNumberInput(mobileNumber) {
        page.forceTypesendKeyByElement(this.elements.mobilNumberImput, mobileNumber);

    }

    fillCreateAccountBtn() {
        this.elements.createAccountBtn().click()

    }
    // validation

    validateCreateAccountLbl() {
        assertsThat.expectElementIsPresentById(this.elements.createAccountLbl);
    }

    validateLoginSucesstLbl() {
        assertsThat.expectElementIsPresentById(this.elements.loginSucesstLbl);
    }

    validateCheckoutProductLbl() {
        assertsThat.expectElementIsPresentById(this.elements.checkoutProductLbl);

    }
    validateAccountCreateLbl() {
        assertsThat.expectElementIsPresentById(this.elements.accountCreateLbl);

    }




}
module.exports = new ProductPage();