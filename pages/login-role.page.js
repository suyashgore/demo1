class LoginRolePage {
  constructor(page) {
    this.page = page;
    this.url = 'https://uni-cph-smt-dev.azurewebsites.net/';
    this.emailInput = page.locator('input[type="email"]');
    this.passwordInput = page.locator('input[type="password"]');
    this.loginButton = page.locator('button:has-text("Login")');
    this.logoutButton = page.locator('button:has-text("Logout")');
  }

  async gotoHome() {
    await this.page.goto(this.url);
  }

  async openLoginDialog() {
    await this.page.locator('button:has-text("Login")').first().click();
  }

  async dismissDialog() {
    // If there is a dismiss/close dialog, handle it here. Otherwise, leave empty.
  }

  async fillCredentials(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async selectRole(roleName) {
    // Dynamic CSS/text selector for any role
    const roleBtn = this.page.locator(`text=/^${roleName}$/i`);
    await roleBtn.first().waitFor({ state: 'visible', timeout: 10000 });
    await roleBtn.first().click();
  }

  async assertRoleVisible(roleName) {
    await this.page.waitForSelector(`text=/^${roleName}$/i`, { state: 'visible', timeout: 10000 });
  }

  async logout() {
    await this.logoutButton.first().click();
  }
}

module.exports = { LoginRolePage };
