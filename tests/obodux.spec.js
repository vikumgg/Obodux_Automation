const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./login.page');

test('obodux login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('primary-admin@yopmail.com', 'abcd@TEST123');

  const title = await page.title();
  console.log('Page title:', title);
  expect(title).toBe('Obodux');
});