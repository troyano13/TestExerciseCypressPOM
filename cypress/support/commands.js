/*
* Autor: Alexandra Tr.
* Fecha: 2024-09-08
* Descripción: Custom Commands, these commands allow you to encapsulate repetitive or complex logic in a function.
* Versión: 1.0
* */
import { faker } from '@faker-js/faker';



Cypress.Commands.add('changeWindowLocation', (url) => {
    cy.window().then((win) => {
        win.location.href = url;
    });
});

/**
   *  Enter a random amount (between 1 and 20)
   * @param path 
   */
Cypress.Commands.add('randomQuantity', () => {
    const randomQuantity = Math.floor(Math.random() * 20) + 1;
    return cy.wrap(randomQuantity)

});

/**
   *  Fake data generation
   * @param path 
   */
Cypress.Commands.add('newUserNameFake', () => {
    const name = faker.internet.userName();
    console.log('esto esta' + name)
    return cy.wrap(name)

})

/**
   *  Fake data generation
   * @param path 
   */
Cypress.Commands.add('newEmailFake', () => {
    const email = faker.internet.email();
    console.log('esto esta6' + email)
    return cy.wrap(email)

})







