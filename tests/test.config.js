// test.config.js

module.exports = {
  baseUrl: 'https://playwright.dev/',
  expectedTitle: /Playwright/,
  selectors: {
    getStartedLink: {
      role: 'link',
      name: 'Get started',
    },
    installationHeading: {
      role: 'heading',
      name: 'Installation',
    },
  },
};