export const checkEnvsGmail = () => {
  
  const gmail_inbox_url = process.env.GMAIL_INBOX_URL ?? '';

  const gmail_user = process.env.GMAIL_USER ?? '';

  const gmail_pass = process.env.GMAIL_PASS ?? '';

    const gmail_login_url = process.env.GMAIL_LOGIN_URL ?? '';

  if (!gmail_inbox_url || !gmail_user || !gmail_pass) {
    throw new Error('GMAIL_URL or GMAIL_USER or GMAIL_PASS environment variables are not defined');
  }

  return {
    gmail_inbox_url,
    gmail_user,
    gmail_pass,
    gmail_login_url
  };
};
