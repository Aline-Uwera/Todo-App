import { chromium, Browser, Page } from '@playwright/test'
import { test, expect } from '@playwright/test'

let browser: Browser
let page: Page

test('renders correctly', async () => {
  const browser = await chromium.launch()
  page = await browser.newPage()
  await page.goto('http://localhost:3000')

  expect(page).not.toBeNull()
})

test('submits login form successfully', async () => {
  const browser = await chromium.launch()
  page = await browser.newPage()
  await page.goto('http://localhost:3000/auth/login') 

  await page.fill('input[name="email"]', 'anoclez@gmail.com')
  await page.fill('input[name="password"]', 'Pass')

  await page.click('button:text("Login")')

  const successMessage = await page.getByText('Successfully')
  expect(successMessage).not.toBeNull()
})
