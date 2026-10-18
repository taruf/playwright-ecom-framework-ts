import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly inventoryList: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    super(page);
    this.inventoryList = page.locator('.inventory_list');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addItemToCart(itemName: string) {
    await this.page
      .locator('.inventory_item', { hasText: itemName })
      .locator('button', { hasText: 'Add to cart' })
      .click();
  }
}
