const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nyo5b3',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
