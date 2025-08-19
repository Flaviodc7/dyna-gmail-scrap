import { scrapFromBrowser } from '@method/browserMethod';
import { checkWeekendHolidayTimeSchedule } from '@utils/checkWeekendHolidayTimeSchedule';
import cron from 'node-cron';

export const handler = async () => {
  // the '* * * * *' into the cron expression is to check every minute
  cron.schedule('* * * * *', async () => {
    if (checkWeekendHolidayTimeSchedule()) {
      //   const minutes = new Date().getMinutes();
      //   await scrapFromBrowser(minutes);
    } else {
      console.log('Fuera de franja horaria');
    }
  });
};

handler();
