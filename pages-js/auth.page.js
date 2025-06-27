// Page Object Model for login and logout functionality
class AuthPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.emailInput = 'input[type="email"]';
    this.passwordInput = 'input[type="password"]';
    this.loginButton = 'button[type="submit"]';
    this.logoutButton = 'text=Logout'; // Adjust if needed
  }

  async goto() {
    await this.page.goto('https://uni-cph-smt-dev.azurewebsites.net/');
  }

  async login(email, password) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async logout() {
    await this.page.waitForSelector(this.logoutButton);
    await this.page.click(this.logoutButton);
  }
}

module.exports = { AuthPage };
