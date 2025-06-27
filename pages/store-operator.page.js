const EMAIL = 'suyashgore2111@gmail.com';
const PASSWORD = 'Target@7001';

class StoreOperatorPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://uni-cph-smt-dev.azurewebsites.net/';
    this.emailInput = page.locator('input[type="email"]');
    this.passwordInput = page.locator('input[type="password"]');
    // Use a more specific selector for the login button in the dialog/modal
    this.loginButton = page.locator('form[role="dialog"] button[type="submit"], div[role="dialog"] button[type="submit"], button[data-testid="login-submit"]');
    this.openLoginBtn = page.locator('header button:has-text("Login"), nav button:has-text("Login")');
    this.roleButton = page.locator('text=/Store Operator/i');
    this.logoutButton = page.locator('button:has-text("Logout")');
  }

  async gotoHome() {
    await this.page.goto(this.url);
  }

  async openLoginDialog() {
    // Use a more specific selector for the main login button
    await this.openLoginBtn.first().click();
    // Wait for email input to be visible
    await this.emailInput.waitFor({ state: 'visible', timeout: 10000 });
  }

  async dismissDialog() {
    // If there is a dismiss/close dialog, handle it here. Otherwise, leave empty.
  }

  async fillCredentials(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async selectStoreOperatorRole() {
    await this.roleButton.first().waitFor({ state: 'visible', timeout: 10000 });
    await this.roleButton.first().click();
  }

  async assertStoreOperatorVisible() {
    await this.page.waitForSelector('text=/Store Operator/i', { state: 'visible', timeout: 10000 });
  }

  async logout() {
    await this.logoutButton.first().click();
  }
}

module.exports = { StoreOperatorPage };
