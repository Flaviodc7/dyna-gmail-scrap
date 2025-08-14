import { BrowserContext } from "@playwright/test";
import { checkLoginGmail } from "@services/gmail/checkLogin";
import { sendEmailGmail } from "@services/gmail/sendEmail";
import { checkEnvsGmail } from "@utils/gmail/checkGmailEnvs";
import { checkLoginDynatrace } from "./checkLogin";

export const mainDynatrace = async (browser: BrowserContext) => {

   const { gmail_inbox_url } = checkEnvsGmail();

  const page = await browser.newPage();

  await page.goto(gmail_inbox_url);

  await page.waitForTimeout(10000);

  await checkLoginDynatrace(page);


};
