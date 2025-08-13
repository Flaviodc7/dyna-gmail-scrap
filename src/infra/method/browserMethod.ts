import { chromium } from '@playwright/test';
import { scrapDynatraceBrowser } from '@services/dynatrace';
import { scrapGmailBrowser } from '@services/gmail';

export const scrapFromBrowser = async () => {
  const win_user = process.env.WIN_USER ?? '';

  // Define the path to the Chrome user data directory
  const path = `C:/Users/${win_user}/AppData/Local/Google/Chrome/User Data`;

  const browser = await chromium.launchPersistentContext(path, {
    headless: false,
    args: [
      '--disable-blink-features=AutomationControlled',
      '--no-sandbox',
      '--disable-infobars',
    ],
  });
  
  await scrapDynatraceBrowser(browser)

  await scrapGmailBrowser(browser);

  // await browser.close();
};
