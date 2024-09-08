/*
* Autor: Alexandra Tr.
* Fecha: 2024-09-08
* Descripción:  General Class to login for login
* Versión: 1.0
* */

import Page from "./Page";

require("cypress-xpath");

let basePage = new Page();
export class Assertions {


  /**
   * This method validates that a ClassName is present in the DOM
   * @param className 
   */
  expectElementIsPresentByClassName(className) {
    let isPresent = basePage.getElementByClassName(className);
    isPresent.should("be.visible");
  }

  /**
   * This method validates that an element is present in the DOM
   * @param element
   */
  expectElementIsPresentById(element) {
    let expectElement = basePage.getElementBySelector(element);
    expectElement.should("exist");
  }

   /**
   * This method validates that an element is present in the DOM
   * @param element
   */
  expectElementIsPresent(selector) {
       cy.get(selector).should('exist');
  }
}