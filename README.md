# architecture POM to Automated Testing for Product Purchase and New User Registration with Faker 

## Descripción
This project aims to automate the functional testing of the product purchase flow and new user registration on the Store website. The tests will be written using Cypress and JavaScrip, POM enables the separation of page-specific actions and elements into reusable components, making it easier to manage changes to the UI. The Faker library is used to generate random data for the new user registration process.

## Requirements
Before starting, make sure you have Node.js and npm installed. You can download them from the official Node.js website.

## Project Structure
The project follows the Screenplay architecture and is structured as follows:

## Estrucutra del proyecto
The project is structured as follows:

```bash
AUTOMATIONEXERCISE
├── cypress
│   ├── config                  # Configuration files for user and environment settings
│   ├── e2e                     # Contains all End-to-End test files and BDD features
│   │   ├── features            # Gherkin feature files for BDD scenarios
│   │   │   ├── example.cy.js   # Example test scenario file
│   │   ├── Pages               # Page Object Model (POM) for UI elements and actions
│   │   │   ├── PageExtend      # Extensions or helpers for base pages
│   │   │   │   └──examplePage.js # Extended page functionality
│   │   │   └──Page.js          # Base Page class with reusable functions
│   ├── fixtures                # Static test data used in test cases (e.g., JSON files)
│   │   └── data.json           # Sample test data
│   ├── support                 # Custom commands and utility functions
│   │   ├── commands.ts         # Custom Cypress commands
│   │   └── e2e.ts              # Configuration for global setup and hooks for Cypress
package.json
cypress.config.js
cypress.env.json
README.md
```
## 🚀 Instalación
```bash
npm install
```
## Run the demo:
```bash
npm cy:open
npx cypress open

```
or
```bash
npm cy:run
npx cypress run --record --key 
```