export const checkEnvsDynatrace = () => {
  const dynatrace_user = process.env.DYNATRACE_USER ?? '';

  const dynatrace_pass = process.env.DYNATRACE_PASS ?? '';

  const dynatrace_main_url = process.env.DYNATRACE_MAIN_URL ?? '';

  const dynatrace_dashboard_url = process.env.DYNATRACE_DASHBOARD_URL ?? '';

  const dynatrace_problems_url = process.env.DYNATRACE_PROBLEMS_URL ?? '';

  if (
    !dynatrace_user ||
    !dynatrace_pass ||
    !dynatrace_main_url ||
    !dynatrace_dashboard_url ||
    !dynatrace_problems_url
  ) {
    throw new Error(
      'DYNATRACE_URL or DYNATRACE_USER or DYNATRACE_PASS or DYNATRACE_DASHBOARD_URL environment variables are not defined',
    );
  }

  return {
    dynatrace_user,
    dynatrace_pass,
    dynatrace_main_url,
    dynatrace_dashboard_url,
    dynatrace_problems_url,
  };
};
