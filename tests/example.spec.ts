import { test, expect } from '@playwright/test';

test('Open Mercado Libre', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.mx/');  
  // await page.locator('#cb1-edit').fill('Iphone');
  await page.locator('xpath=//input[@id="cb1-edit"]').fill('Iphone');
  // await page.locator('input[id="cb1-edit"]').fill('Iphone');
  await page.keyboard.press('Enter');
  await expect(page.locator('//ol[contains(@class,\'ui-search-layout\')]')).toBeVisible();
  await page.pause();
  
  const titles = await page.locator('//ol[contains(@class,\'ui-search-layout\')]//li//h2').allInnerTexts();

  console.log('the total number of results is: ', titles.length);
  for (let title of titles) {
    console.log('the title is: ', title)
  }
});

test('Get By Role', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.mx/');
  await page.getByRole('link', { name: 'Mis compras', exact: true}).click();
  await page.pause();
});
