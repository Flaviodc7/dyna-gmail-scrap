import { Page } from "@playwright/test";

export const sendEmailGmail = async (page: Page) => {
  
    const destination_emails = 'example@gmail.com'

    const subject = 'Hello from Playwright!';

    const message = 'Just testing mail from Playwright'

    await page.locator('div[jsaction="click:dlrqf; clickmod:dlrqf"]').click();
    
    await page.locator('input[aria-label="Destinatarios en Para"]').pressSequentially(destination_emails, { delay: 200 });

    await page.locator('input[aria-label="Asunto"]').pressSequentially(subject, { delay: 200 });

    await page.locator('div[aria-label="Cuerpo del mensaje"]').pressSequentially(message, { delay: 200 });

    await page.locator('div[data-tooltip="Enviar ‪(Ctrl-Enter)‬"]').click();

};
