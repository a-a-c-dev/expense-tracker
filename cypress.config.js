const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  viewportHeight: 1000,
  viewportWidth: 1280,
  env: {
    apiUrl: "http://localhost:3000/",
    mobileViewportWidthBreakpoint: 414,
    coverage: false,
    codeCoverage: {
      url: "http://localhost:3000/__coverage__",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
