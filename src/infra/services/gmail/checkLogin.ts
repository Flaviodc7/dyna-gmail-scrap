import { Page } from "@playwright/test";
import { checkEnvsGmail } from "@utils/gmail/checkGmailEnvs";

export const checkLoginGmail = async (page: Page) => {

  const { gmail_user, gmail_pass, gmail_login_url } = checkEnvsGmail();

  const element_login = page.locator('[data-tooltip="Recibidos"]');

  const quantity = await element_login.count();

  if (quantity == 0) {

    await page.goto(gmail_login_url);

    await page.locator('[type="email"]').pressSequentially(gmail_user, { delay: 200 });

    await page.getByText('Siguiente').click();

    await page.locator('[type="password"]').pressSequentially(gmail_pass, { delay: 200 });

  }
};
