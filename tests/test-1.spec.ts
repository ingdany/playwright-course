import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mercadolibre.com/');
  await page.getByRole('link', { name: 'México' }).click();
  await page.getByPlaceholder('Buscar productos, marcas y má').click();
  await page.getByPlaceholder('Buscar productos, marcas y má').press('CapsLock');
  await page.getByPlaceholder('Buscar productos, marcas y má').fill('I');
  await page.getByPlaceholder('Buscar productos, marcas y má').press('CapsLock');
  await page.getByPlaceholder('Buscar productos, marcas y má').fill('Iphone');
  await page.getByRole('button', { name: 'Buscar' }).click();
  await page.getByRole('link', { name: 'Apple iPhone 12 (128 GB) -' }).click();
});