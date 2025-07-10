class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator("[inputmode='email']");
    this.passwordInput = page.locator("[type='password']");
    this.submitButton = page.locator("[name='submit']");
  }

  async goto() {
    await this.page.goto('https://web.dev.obodux.boris-software.com');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
      this.submitButton.click()
    ]);
  }
}

module.exports = { LoginPage }; 