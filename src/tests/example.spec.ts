// import {expect, test} from '@playwright/test';


// test.describe('Intial Login Page redirection', () => {
//   test('should navigate to login page', async ({page}) => {
//     await page.goto('https://www.saucedemo.com/');
//     await page.locator('[data-test="username"]').fill('standard_user');
//     await page.locator('[data-test="password"]').fill('secret_sauce');
//     await page.locator('[data-test="login-button"]').click();
//     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');    
//   });

// });


import { test, expect } from 'fixtures/pages.fixture';
import { users } from 'data/users';

test.describe('Initial login page redirection', () => {
  test('should navigate to inventory page after valid login', async ({ page, loginPage }) => {
    await loginPage.goto('/');
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(page).toHaveURL('/inventory.html');
  });
});
