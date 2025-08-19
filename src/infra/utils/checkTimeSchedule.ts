import { currentTime } from './currentTime';
import { checkGlobalEnvs } from './checkGlobalEnvs';

export const checkTimeSchedule = () => {
  const hours = Number(currentTime().hours);
  const initial_time = Number(checkGlobalEnvs().initial_time);
  const final_time = Number(checkGlobalEnvs().final_time);

  if (hours >= initial_time && hours < final_time) {
    return true;
  } else {
    console.log(
      `Out of schedule, initial time is ${initial_time} and final time is ${final_time}`,
    );
    return false;
  }
};
