import { BrowserContext } from "@playwright/test";

export const scrapDynatraceBrowser = async (browser: BrowserContext) => {

  const dynatrace_url = process.env.DYNATRACE_URL ?? '';

  const dynatrace_user = process.env.DYNATRACE_USER ?? '';

  const dynatrace_pass = process.env.DYNATRACE_PASS ?? '';

  const page = await browser.newPage();

  if (!dynatrace_url || !dynatrace_user || !dynatrace_pass) {
    throw new Error('DYNATRACE_SITE or DYNATRACE_USER or DYNATRACE_PASS environment variables are not defined');
  }

  await page.goto(dynatrace_url);

  await page.getByPlaceholder("Enter your email").pressSequentially(dynatrace_user, { delay: 200 })

  await page.getByText('Next').click()

  await page.locator('[id=":rb:"]').pressSequentially(dynatrace_pass, { delay: 200 });

};
