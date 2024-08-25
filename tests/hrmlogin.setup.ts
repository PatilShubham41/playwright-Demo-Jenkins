import { test as setup, expect } from '@playwright/test'
import { join } from 'node:path';
import LoginPage from '../pages/login.page'
import HomePage from '../pages/home.page'



const authFile = join('.auth', 'adminUser.json');

setup('Setting up the authentication state', async({page})=>{

    const loginPage = new LoginPage(page);
    await loginPage.doLogin();
    const homePage = new HomePage(page);
    await expect(homePage.siteLogo()).toBeVisible();

    await page.context().storageState({path: authFile});

})
