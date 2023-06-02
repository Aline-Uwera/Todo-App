import { chromium, Browser, Page } from '@playwright/test'
import { test, expect } from '@playwright/test'

let browser: Browser
let page: Page

test('submits Add task form successfully', async () => {
  const browser = await chromium.launch()
  page = await browser.newPage()
  await page.goto('http://localhost:3000/auth/login') // Replace with your actual URL

  await page.fill('input[name="email"]', 'anoclez@gmail.com')
  await page.fill('input[name="password"]', 'Pass')
  await page.click('button:text("Login")')

  await page.click("'+'")
  await page.getByPlaceholder('Task name').fill('Test Task')
  await page.getByPlaceholder('Description').fill('Test Description')
  await page.getByRole('button', { name: 'Add' }).click()
  const successMessage = await page.getByText('Test Task')
  expect(successMessage).not.toBeNull()
})

