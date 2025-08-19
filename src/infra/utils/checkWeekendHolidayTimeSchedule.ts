import * as Holidays from 'date-holidays';
import { dayName } from './dayName';
import { currentTime } from './currentTime';
import { checkTimeSchedule } from './checkTimeSchedule';

export const checkWeekendHolidayTimeSchedule = () => {
  const day = dayName();
  if (day !== 'sunday' && day !== 'saturday') {
    const hd = new (Holidays as any)('AR');
    const { timecheckHoliday } = currentTime();

    if (!hd.isHoliday(timecheckHoliday)) {
      return checkTimeSchedule();
    } else {
      console.log(`Today is ${day}, it's a holiday.`);
    }
  } else {
    console.log(`Today is ${day}, it's the weekend.`);
  }
  return false;
};
