import { BrowserContext } from '@playwright/test';
import { checkLoginDynatrace } from './checkLogin';
import { checkEnvsDynatrace } from '@utils/dynatrace/checkDynatraceEnvs';

export const mainDynatrace = async (browser: BrowserContext) => {
  const { dynatrace_url } = checkEnvsDynatrace();

  const page = await browser.newPage();

  await page.goto(dynatrace_url);

  await page.waitForTimeout(10000);

  await checkLoginDynatrace(page);
};
