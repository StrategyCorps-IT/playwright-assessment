// Write a test login to Bazing Website(Bazing.com), Verifing the bazing home page.
// Using username:"testauto@savingsfix.com" and Password1 as the password.

import { test, expect } from '@playwright/test';
import { url } from 'inspector';
 
test('login', async ({ page }) => {
  await page.goto('https://web.dev.bazing.com/');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('testauto@savingsfix.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Password1!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForURL('https://web.dev.bazing.com/home');
  await expect(page).toHaveURL('https://web.dev.bazing.com/home');
  await page.getByRole('link', { name: 'Log Out' }).click();
});
