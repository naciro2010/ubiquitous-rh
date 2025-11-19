import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Landing Page Accessibility', () => {
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/')
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/')

    // Test Tab navigation
    await page.keyboard.press('Tab')
    const firstFocusedElement = await page.evaluate(() => document.activeElement?.tagName)
    expect(firstFocusedElement).toBeTruthy()

    // Test navigation through multiple elements
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab')
    }

    const focusedElement = await page.evaluate(() => document.activeElement?.tagName)
    expect(focusedElement).toBeTruthy()
  })

  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/')

    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBe(1) // Only one h1

    const h1Text = await page.locator('h1').first().textContent()
    expect(h1Text).toBeTruthy()
  })

  test('should have sufficient color contrast', async ({ page }) => {
    await page.goto('/')

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2aa', 'wcag21aa'])
      .analyze()

    const contrastViolations = accessibilityScanResults.violations.filter(
      (v) => v.id === 'color-contrast'
    )
    expect(contrastViolations).toHaveLength(0)
  })

  test('all images should have alt text', async ({ page }) => {
    await page.goto('/')

    const images = await page.locator('img').all()
    for (const img of images) {
      const alt = await img.getAttribute('alt')
      expect(alt).toBeTruthy()
    }
  })

  test('should work with screen reader simulation', async ({ page }) => {
    await page.goto('/')

    // Check for ARIA landmarks
    const mainLandmark = await page.locator('main').count()
    expect(mainLandmark).toBeGreaterThan(0)

    const navLandmark = await page.locator('nav').count()
    expect(navLandmark).toBeGreaterThan(0)
  })
})
