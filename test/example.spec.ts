import { test, expect } from '@playwright/test';
import { url } from 'inspector';
 
test('Go to Bazing Wedsite', async ({ page }) => {
  await page.goto('https://web.dev.bazing.com/');
 await expect(page).toHaveURL('https://web.dev.bazing.com/');
});