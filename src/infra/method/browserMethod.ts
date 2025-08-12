import { chromium } from '@playwright/test';

export const scrapFromBrowser = async () => {
  const browser = await chromium.launch({ headless: false });

  const page = await browser.newPage();

  const url = process.env.MAIN_SITE ?? '';

  if (!url) {
    throw new Error('MAIN_SITE environment variable is not defined');
  }

  await page.goto(url);

  await browser.close();
};
