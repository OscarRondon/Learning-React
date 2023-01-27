// End to end Test
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'

test('App Component shows random fact and image', async ({ page }) => {
  // url to inspect settiing
  await page.goto(LOCALHOST_URL)

  // Tests.
  const text = await page.getByRole('paragraph')
  const img = await page.getByRole('img')
  const textContent = await text.textContent()
  const imgSrc = await img.getAttribute('src')

  // results
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imgSrc).not.toBeNull()
})
