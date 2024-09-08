/*
* Autor: Alexandra Tr.
* Fecha: 2024-09-08
* Descripción:  POO Class general
* Versión: 1.0
* */
require("cypress-xpath");

export default class Page {


  constructor(elements) {
    this.elements = elements;
  }

  /**
   * *This method fills an input with the desired text without delay and without simulating step-by-step writing.
   * @param element 
   * @param text 
   */
  forceTypesendKeyByElement(element, text) {
    cy.get(element).type(text, { delay: 0, force: true });
  }

  /**
   ** This method causes a file to be selected with the given <input> element
   * @param element
   * @param path 
   */
  forcesetFilePathOnInput(element, path) {
    cy.get(element).selectFile(path, { force: true });
  }


}
module.exports = Page;
