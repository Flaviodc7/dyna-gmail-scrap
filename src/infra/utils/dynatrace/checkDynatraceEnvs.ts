export const checkEnvsDynatrace = () => {
  const dynatrace_url = process.env.DYNATRACE_URL ?? '';

  const dynatrace_user = process.env.DYNATRACE_USER ?? '';

  const dynatrace_pass = process.env.DYNATRACE_PASS ?? '';

  if (!dynatrace_url || !dynatrace_user || !dynatrace_pass) {
    throw new Error(
      'DYNATRACE_URL or DYNATRACE_USER or DYNATRACE_PASS environment variables are not defined',
    );
  }

  return {
    dynatrace_url,
    dynatrace_user,
    dynatrace_pass,
  };
};
