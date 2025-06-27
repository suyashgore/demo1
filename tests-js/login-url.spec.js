import { test, expect } from '@playwright/test';
const { LoginFlowPage } = require('../pages/login-flow.page');

const EMAIL = 'suyashgore2111@gmail.com';
const PASSWORD = 'Target@7001';

// Test: Login and verify URL

test('login and verify URL', async ({ page }) => {
  const flow = new LoginFlowPage(page);
  await flow.gotoHome();
  await flow.openLoginDialog();
  await flow.dismissDialog();
  await flow.fillCredentials(EMAIL, PASSWORD);
  await flow.signIn();
  // Wait for navigation or dashboard/homepage after login
  await expect(page).toHaveURL(/uni-cph-smt-dev.azurewebsites.net/);
});
