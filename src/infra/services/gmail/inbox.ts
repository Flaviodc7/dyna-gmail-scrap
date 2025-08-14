import { BrowserContext } from "@playwright/test";
import { checkEnvsGmail } from "@utils/gmail/checkGmailEnvs";
import { checkLoginGmail } from "./checkLogin";
import { sendEmailGmail } from "./sendEmail";

export const inboxGmail = async (browser: BrowserContext) => {

   const { gmail_inbox_url } = checkEnvsGmail();

  const page = await browser.newPage();

  await page.goto(gmail_inbox_url);

  await page.waitForTimeout(10000);

  await checkLoginGmail(page);

  await sendEmailGmail(page);

};
