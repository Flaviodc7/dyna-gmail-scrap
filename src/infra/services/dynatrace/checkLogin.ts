import { BrowserContext, Page } from '@playwright/test';
import { checkEnvsDynatrace } from '@utils/dynatrace/checkDynatraceEnvs';

export const checkLoginDynatrace = async (page: Page) => {
  const { dynatrace_url, dynatrace_user, dynatrace_pass } =
    checkEnvsDynatrace();

  await page.goto(dynatrace_url);

  const element_login = page.getByPlaceholder('Enter your email');

  const quantity = await element_login.count();

  if (quantity != 0) {
    await page.goto(dynatrace_url);

    await page
      .getByPlaceholder('Enter your email')
      .pressSequentially(dynatrace_user, { delay: 200 });

    await page.getByText('Next').click();

    await page
      .locator('[id=":rb:"]')
      .pressSequentially(dynatrace_pass, { delay: 200 });
  }
};
