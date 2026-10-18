import { test, expect } from 'fixtures/pages.fixture';
import { users } from 'data/users';

test.describe('Initial login page redirection', () => {
  test('should navigate to inventory page after valid login', async ({ page, loginPage }) => {
    await loginPage.goto('/');
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(page).toHaveURL('/inventory.html');
  });
});
