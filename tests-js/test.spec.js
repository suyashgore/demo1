import { test, expect } from '@playwright/test';
const { LoginRolePage } = require('../pages/login-role.page');

// Helper for credentials
const EMAIL = 'suyashgore2111@gmail.com';
const PASSWORD = 'Target@7777';

// Test for Country Admin
test('login as Country Admin', async ({ page }) => {
  const flow = new LoginRolePage(page);
  await flow.gotoHome();
  await flow.openLoginDialog();
  // Debug: Take screenshot after opening login dialog
  await page.screenshot({ path: 'country-admin-login-dialog.png' });
  await flow.dismissDialog();
  await flow.fillCredentials(EMAIL, PASSWORD);
  await flow.selectRole('Country Admin');
  await flow.assertRoleVisible('Country Admin');
  await flow.logout();
  await flow.gotoHome();
  await expect(page).toHaveURL('https://uni-cph-smt-dev.azurewebsites.net/');
});

// Test for Store Operator
test('login as Store Operator', async ({ page }) => {
  const flow = new LoginRolePage(page);
  await flow.gotoHome();
  await flow.openLoginDialog();
  // Debug: Take screenshot after opening login dialog
  await page.screenshot({ path: 'store-operator-login-dialog.png' });
  await flow.dismissDialog();
  await flow.fillCredentials(EMAIL, PASSWORD);
  await flow.selectRole('Store Operator');
  await flow.assertRoleVisible('Store Operator');
  await flow.logout();
  await flow.gotoHome();
  await expect(page).toHaveURL('https://uni-cph-smt-dev.azurewebsites.net/');
});