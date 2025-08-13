// @ts-check
import { expect } from '@playwright/test';

const baseUrl = 'https://www.saucedemo.com/';

export class loginPage {
    constructor(page){
        this.page = page;
        this.username = '[data-test="username"]';
        this.password = '[data-test="password"]';
        this.loginButton = '[data-test="login-button"]';
        this.errorMessage = '[data-test="error"]';
    }

    async goto(){
        await this.page.goto(baseUrl);
    }

    async loginAction(username, password){
        await this.page.locator(this.username).fill(username);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.loginButton).click();
    }

    async verifyErrorMessageNotVisible(){
        await expect(this.page.locator(this.errorMessage)).not.toBeVisible();
    }

    async verifyErrorMessageContains(text){
        await expect(this.page.locator(this.errorMessage)).toContainText(text);
    }
}