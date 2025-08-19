export const checkGlobalEnvs = () => {
  const win_user = process.env.WIN_USER ?? '';

  const screenshot_path = process.env.IMAGE_PATH ?? '';

  const initial_time = process.env.INITIAL_TIME ?? '';

  const final_time = process.env.FINAL_TIME ?? '';

  if (!win_user || !screenshot_path || !initial_time || !final_time) {
    throw new Error(
      'WIN_USER or IMAGE_PATH environment variable is not defined',
    );
  }

  return {
    win_user,
    screenshot_path,
    initial_time,
    final_time,
  };
};
