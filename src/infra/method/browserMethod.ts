import { chromium } from '@playwright/test';
import { mainDynatrace } from '@services/dynatrace/mainUrl';
import { inboxGmail } from '@services/gmail/inbox';

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

  await mainDynatrace(browser);

  await inboxGmail(browser);

  // await browser.close();
};
