import { BrowserContext } from "@playwright/test";

export const scrapDynatraceBrowser = async (browser: BrowserContext) => {
  
  const dyna_url = process.env.MAIN_SITE ?? '';

  const dyna_user = process.env.DYNA_USER ?? '';

  const dyna_pass = process.env.DYNA_PASS ?? '';

  const page = await browser.newPage();

  if (!dyna_url || !dyna_user || !dyna_pass) {
    throw new Error('MAIN_SITE or DYNA_USER or DYNA_PASS environment variables are not defined');
  }

  await page.goto(dyna_url);

  await page.getByPlaceholder("Enter your email").pressSequentially(dyna_user, { delay: 200 })

  await page.getByText('Next').click()

  await page.locator('[id=":rb:"]').pressSequentially(dyna_pass, { delay: 200 });

};
