const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  projectId: 'ogefwh',
  defaultCommandTimeout: 20000, // way time elements
  video: true, //video
  screenshotOnRunFailure: true,
  viewportWidth: 1500, // way time test execute
  viewportHeight: 800, // screen test execute
  reporter: 'mochawesome',//reports
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    saveAllAttempts: true,
    ignoreVideos: true,

  },
  e2e: {
    baseUrl: 'https://automationexercise.com/',
    hideXHRInCommandLog: true,
    setupNodeEvents(on, config) {
    },
  },
  //Environment variables
  env: {
    url: process.env.URL,
    USER_EMAIL_ADMIN: process.env.USER_EMAIL_ADMIN,
    USER_PASSWORD: process.env.USER_PASSWORD,
  }
});

