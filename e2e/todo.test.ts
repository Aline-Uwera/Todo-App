import { test, expect } from '@playwright/test'

test('Todo App', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page
    .getByText(
      'Stay organized, boost productivity, and achieve your goals effortlessly.Get Star'
    )
    .click()
  await page.getByRole('link', { name: 'Get Started' }).click()
  await page.getByPlaceholder('Your email').click()
  await page.getByPlaceholder('Your email').fill('anoclez@gmail.com')
  await page.getByPlaceholder('Your password').click()
  await page.getByPlaceholder('Your password').fill('Pass')
  await page.getByRole('button', { name: 'Login' }).click()
  await page.getByRole('button', { name: '+' }).click()
  await page.getByPlaceholder('Task name').click()
  await page.getByPlaceholder('Task name').fill('Gym')
  await page.getByPlaceholder('Description').click()
  await page.getByPlaceholder('Description').fill('Legs')
  await page.getByRole('button', { name: 'Add' }).click()
  await page.getByRole('button', { name: 'Close' }).click()
  await page.getByRole('link', { name: 'Active Tasks' }).click()
  await page.getByRole('link', { name: 'Completed Tasks' }).click()
  await page.getByRole('link', { name: 'All Tasks' }).click()
  await page.getByRole('checkbox', { name: 'New' }).click()
  expect(await page.getByText('Task updated')).not.toBeNull()
  await page.getByRole('button', { name: 'Open main menu' }).click()
  await page.getByRole('button', { name: 'Open main menu' }).click()
  await page.getByRole('navigation').getByRole('img').click()
  await page.getByRole('button', { name: 'Logout' }).click()
})
