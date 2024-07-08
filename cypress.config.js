const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 4000,
  viewportWidth: 1920, // задать расширение браузера
  viewportHeight: 1080,
  numTestsKeptInMemory: 1,
  blockHosts: ['*.google.com'], // заблочить гугл аналитику
  chromeWebSecurity: false,
  screenshotsFolder: 'screenshFolder', // папка для скринов завалившихся кейсов
  videosFolder: 'videoFolder', // папка для видосов завалившихся кейсов
  video: false, // не снимать видосы упавших кейсов
  responseTimeout: 30000,
  e2e: {
    retries: {
      runMode: 1, // ран без UI (через Git)
      openMode: 1, // ран через UI
    },
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space/',
    setupNodeEvents(on, config) { // ивенты cypress
      // https://docs.cypress.io/api/cypress-api/catalog-of-events#__docusaurus_skipToContent_fallback
      //on('after:run') // все логи по тесту
      // implement node event listeners here
    },
  },
});


// https://docs.cypress.io/guides/references/configuration

