// @ts-check
import { expect } from '@playwright/test';

export class homePage {
    constructor(page){
        this.page = page;
        this.titlePage = '[data-test="title"]';
    }

    async verifyTitlePageNotVisible(){
        await expect(this.page.locator(this.titlePage)).not.toBeVisible();
    }

    async verifyTitlePageContains(text){
        await expect(this.page.locator(this.titlePage)).toContainText(text);
    }
}