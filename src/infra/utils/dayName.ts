import { currentTime } from './currentTime';

export const dayName = () => {
  const { dateDay } = currentTime();
  const fecha = new Date(dateDay);
  const days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];

  return days[fecha.getDay()];
};
