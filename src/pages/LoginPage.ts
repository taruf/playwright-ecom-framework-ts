import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    //this.usernameInput = page.locator('[data-test="username"]'); // CSS attribute selector
    this.usernameInput = page.getByTestId('username')             // 1. semantic (dedicated test attribute - best approach) test-id locator
    //this.passwordInput = page.locator('[data-test="password"]'); // CSS attribute selector
    this.passwordInput = page.getByRole('textbox', { name: 'password' }) // 2. user facing ( based on role + aria label)

    //this.loginButton = page.locator('[data-test="login-button"]'); // CSS attribute selector

    //this.loginButton = page.getByTestId('login-button') //getByTestId —   (via data-test)
    //this.loginButton = page.getByRole('button', { name: 'Login' }) // getByRole —   (implicit role button from type="submit", accessible name from value)
   // this.loginButton = page.locator('#login-button') //CSS #id —  
   // this.loginButton = page.locator('[name="login-button"]') // CSS [name] — 
   // this.loginButton = page.locator('.submit-button.btn_action') //CSS .class —  
    //this.loginButton = page.locator('input[type="submit"][value="Login"]') // CSS attribute combo —  
    this.loginButton = page.locator('xpath=//input[@id="login-button"]') //XPath —  
    //this.loginButton = page.locator('[data-test="login-button"]') //CSS [data-test] —  


    this.errorMessage = page.locator('[data-test="error"]');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
