const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "tfs4kt",
    e2e: {
        retries: 1,
        baseUrl: "http://qamid.tmweb.ru",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        }
    }
});
