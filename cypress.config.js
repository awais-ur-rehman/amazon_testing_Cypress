const { defineConfig } = require('cypress')

module.exports = defineConfig({
    video: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    pageLoadTimeout: 120000,
    e2e: {
        setupNodeEvents(on, config) { },
        baseUrl: 'https://www.amazon.com/',
        supportFile: false,
    },
})