class LoginFlowPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://uni-cph-smt-dev.azurewebsites.net/';
    this.loginBtn = page.getByRole('button', { name: 'Login' });
    this.dontShowDialogCheckbox = page.getByRole('checkbox', { name: "Don't show this dialog again!" });
    this.proceedToLoginBtn = page.getByRole('button', { name: 'Proceed To Login' });
    this.emailInput = page.getByRole('textbox', { name: 'Email Address' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.signInBtn = page.getByRole('button', { name: 'Sign in' });
    this.applyBtn = page.getByRole('button', { name: 'Apply' });
    this.bannerPath = page.getByRole('banner').locator('path');
  }

  async gotoHome() {
    await this.page.goto(this.url);
  }

  async openLoginDialog() {
    await this.loginBtn.click();
  }

  async dismissDialog() {
    await this.dontShowDialogCheckbox.check();
    await this.proceedToLoginBtn.click();
  }

  async fillCredentials(email, password) {
    await this.emailInput.click();
    await this.emailInput.fill(email);
    await this.passwordInput.click();
    await this.passwordInput.fill(password);
    await this.passwordInput.press('Enter');
  }

  async signIn() {
    await this.signInBtn.click();
  }

  async updatePassword(newPassword) {
    await this.passwordInput.dblclick();
    await this.passwordInput.fill(newPassword);
    await this.passwordInput.press('Enter');
    await this.passwordInput.press('ControlOrMeta+a');
    await this.passwordInput.fill(newPassword);
    await this.passwordInput.press('Enter');
  }

  async gotoUserSettings() {
    await this.page.goto('https://uni-cph-smt-dev.azurewebsites.net/user-settings');
  }

  async applySettings() {
    await this.applyBtn.click();
  }

  async clickBannerPath() {
    await this.bannerPath.click();
  }

  async gotoHomeAgain() {
    await this.page.goto(this.url);
  }
}

module.exports = { LoginFlowPage };
