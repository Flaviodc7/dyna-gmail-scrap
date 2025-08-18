import { Page } from '@playwright/test';
import { checkEnvsDynatrace } from '@utils/dynatrace/checkDynatraceEnvs';
import { checkGlobalEnvs } from '@utils/checkGlobalEnvs';
import { currentTime } from '@utils/currentTime';
import * as path from 'path';

export const screenshotDynatrace = async (page: Page) => {
  const { screenshot_path } = checkGlobalEnvs();

  const file_name = `screenshot-${currentTime()}.jpeg`;

  // const { dynatrace_dashboard_url } = checkEnvsDynatrace();

  // await page.goto(dynatrace_dashboard_url);

  await page.screenshot({
    clip: { x: 135, y: 285, width: 1735, height: 275 },
    type: 'jpeg',
    path: path.join(screenshot_path, file_name),
    quality: 100,
  });
};
