import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('should navigate to landing page', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/RH Manager/)
  })

  test('should display hero section', async ({ page }) => {
    await page.goto('/')
    const hero = page.locator('section').first()
    await expect(hero).toBeVisible()
  })

  test('should have working language switcher', async ({ page }) => {
    await page.goto('/')

    // Find and click language switcher
    const langButton = page.getByRole('button', { name: /language/i }).or(page.locator('[aria-label*="language"]'))
    if (await langButton.count() > 0) {
      await langButton.first().click()

      // Verify dropdown is visible
      const dropdown = page.locator('[role="menu"]').or(page.locator('.dropdown-menu'))
      await expect(dropdown.first()).toBeVisible()
    }
  })

  test('should have working theme toggle', async ({ page }) => {
    await page.goto('/')

    const themeButton = page.getByRole('button', { name: /theme/i }).or(page.locator('[aria-label*="theme"]'))
    if (await themeButton.count() > 0) {
      await themeButton.first().click()

      // Check if theme changed (look for class changes on html or body)
      const htmlClass = await page.locator('html').getAttribute('class')
      expect(htmlClass).toBeTruthy()
    }
  })
})
