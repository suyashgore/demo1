// Example page object in JavaScript
class ExamplePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://example.com');
  }

  async getTitle() {
    return this.page.title();
  }
}

module.exports = { ExamplePage };
