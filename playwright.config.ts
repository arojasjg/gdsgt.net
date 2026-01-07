/**
 * Playwright Configuration
 * 
 * For accessibility and E2E testing
 */

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { outputFolder: 'a11y-results' }],
    ['json', { outputFile: 'a11y-results/results.json' }],
  ],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: [
    {
      command: 'pnpm --filter www dev',
      port: 3000,
      reuseExistingServer: !process.env.CI,
    },
    {
      command: 'pnpm --filter gdserp dev',
      port: 3001,
      reuseExistingServer: !process.env.CI,
    },
  ],
});
