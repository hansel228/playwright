// @ts-check
import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { homePage } from '../pages/homePage';

test(`Unsuccessful login`, async ({ page }) => {

    const login = new loginPage(page);
    const home = new homePage(page);

    await login.goto();
    await login.loginAction('abc', '123');

    await home.verifyTitlePageNotVisible();
    await login.verifyErrorMessageContains('do not match');

});