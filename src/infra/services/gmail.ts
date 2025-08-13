import { BrowserContext } from "@playwright/test";

export const scrapGmailBrowser = async (browser: BrowserContext) => {
  
  const gmail_url = process.env.GMAIL_URL ?? '';

  const gmail_user = process.env.GMAIL_USER ?? '';

  const gmail_pass = process.env.GMAIL_PASS ?? '';

  if (!gmail_url || !gmail_user || !gmail_pass) {
    throw new Error('GMAIL_URL or GMAIL_USER or GMAIL_PASS environment variables are not defined');
  }

  const page2 = await browser.newPage();

  await page2.goto(gmail_url);

  const element_login = page2.locator('[id=":k4"]');

  const quantity = await element_login.count();

  if (quantity == 0) {
    const gmail_login = process.env.GMAIL_LOGIN ?? '';

    await page2.goto(gmail_login);

    await page2.locator('[type="email"]').pressSequentially(gmail_user, { delay: 200 });

    await page2.getByText('Siguiente').click();

    await page2.locator('[type="password"]').pressSequentially(gmail_pass, { delay: 200 });

  }
};
