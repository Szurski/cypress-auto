const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nyo5b3',
  e2e: {
    baseUrl: 'http://localhost:8080/parabank',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
