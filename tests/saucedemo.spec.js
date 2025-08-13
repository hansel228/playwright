// @ts-check
import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { homePage } from '../pages/homePage';

const usernames = [ 'standard_user', 'problem_user' ];

for (const username of usernames){

    test(`Successful login for ${username}`, async ({ page }) => {

        const login = new loginPage(page);
        const home = new homePage(page);

        await login.goto();
        await login.loginAction(username, 'secret_sauce');

        await home.verifyTitlePageContains('Products');
        await login.verifyErrorMessageNotVisible();
    });

}