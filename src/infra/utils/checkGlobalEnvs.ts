export const checkGlobalEnvs = () => {
  const win_user = process.env.WIN_USER ?? '';

  const screenshot_path = process.env.IMAGE_PATH ?? '';

  if (!win_user || !screenshot_path) {
    throw new Error(
      'WIN_USER or IMAGE_PATH environment variable is not defined',
    );
  }

  return {
    win_user,
    screenshot_path,
  };
};
