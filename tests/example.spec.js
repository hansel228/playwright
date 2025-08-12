// @ts-check
import { test, expect } from '@playwright/test';
import config from './test.config.js';

// some update here

const { baseUrl, expectedTitle, selectors } = config;

test('has title', async ({ page }) => {
  await page.goto(baseUrl);
  await expect(page).toHaveTitle(expectedTitle);
});

test('get started link', async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByRole(selectors.getStartedLink.role, { name: selectors.getStartedLink.name }).click();
  await expect(
    page.getByRole(selectors.installationHeading.role, { name: selectors.installationHeading.name })
  ).toBeVisible();
});
