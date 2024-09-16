import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('https://sosdev.vercel.app/')
  await expect(page).toHaveTitle('SOSdev')

  await page.getByRole('tab', { name: 'Database' }).click()
  await expect(page).toHaveURL(
    'https://sosdev.vercel.app/?category=Database&page=1'
  )

  await page.getByRole('link', { name: 'SOSdev', exact: true }).click()
  await expect(page).toHaveURL('https://sosdev.vercel.app/')

  await page.getByPlaceholder('Search...').click()
  await page.getByPlaceholder('Search...').fill('supa')
  await expect(page.getByText('supabase')).toBeVisible

  const pageSupabasePromise = page.waitForEvent('popup')
  await page.getByRole('button', { name: 'Supabase Supabase Database' }).click()
  const pageSupabase = await pageSupabasePromise
  await expect(pageSupabase).toHaveURL('https://supabase.com')

  await page.getByPlaceholder('Search...').click()
  await page.getByPlaceholder('Search...').fill('')
  await expect(page).toHaveURL('https://sosdev.vercel.app/?page=1')

  await page.getByLabel('pagination item 2').click()
  await expect(page).toHaveURL('https://sosdev.vercel.app/?page=2')
  await page.getByLabel('pagination item 3').click()
  await expect(page).toHaveURL('https://sosdev.vercel.app/?page=3')

  await page.getByRole('link', { name: 'About' }).click()
  await expect(page.getByRole('heading', { name: 'About' })).toBeVisible

  await page.getByRole('link', { name: 'Privacy Policy' }).click()
  await expect(page.getByRole('heading', { name: 'Privacy Policy' }))
    .toBeVisible

  await page.getByRole('link', { name: 'Contact' }).click()
  await expect(page.getByRole('heading', { name: 'Contact' })).toBeVisible

  await page.getByRole('link', { name: 'SOSdev', exact: true }).click()
  await expect(page).toHaveURL('https://sosdev.vercel.app/')

  const pageGithubPromise = page.waitForEvent('popup')
  await page.getByRole('link', { name: 'GitHub' }).click()
  const pageGithub = await pageGithubPromise
  await expect(pageGithub).toHaveURL('https://github.com/LuaGR/SOSdev')

  await page.getByLabel('Switch to light mode').locator('path').first().click()
  const bgColorLight = await page.locator('body').evaluate(() => {
    return window.getComputedStyle(document.body).backgroundColor
  })
  expect(bgColorLight).toBe('rgb(255, 255, 255)')

  await page.getByRole('link', { name: 'SOSdev™' }).click()
  await expect(page).toHaveURL('https://sosdev.vercel.app/')
})
