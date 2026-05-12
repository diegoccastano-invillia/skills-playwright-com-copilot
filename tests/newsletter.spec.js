const { test, expect } = require('@playwright/test');

test('confirma inscricao na newsletter', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('Seu e-mail').fill('ada@example.com');
  await page.getByRole('button', { name: 'Inscrever' }).click();

  await expect(page.getByText('Inscrição confirmada!')).toBeVisible();
});