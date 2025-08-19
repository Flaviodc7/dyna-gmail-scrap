export const currentTime = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const dateDay = `${year}-${month}-${day}`;

  const timecheckHoliday = `${year}-${month}-${day} ${hours}:${minutes}:${seconds} GMT-0300`;

  const timeScreenshot = `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;

  return {
    year,
    month,
    day,
    hours,
    minutes,
    seconds,
    dateDay,
    timeScreenshot,
    timecheckHoliday,
  };
};
