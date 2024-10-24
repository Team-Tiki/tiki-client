import { format } from 'date-fns';

import { MONTHS } from '@/page/archiving/index/constant/month';
import { MonthType } from '@/page/archiving/index/type/monthType';

export const getMonthDate = (monthName: MonthType, currentYear: number) => {
  const monthIndex = MONTHS.indexOf(monthName);

  return new Date(currentYear, monthIndex);
};

export const formattingDate = (date: Date) => {
  const formattedDate = format(date, 'yyyy.MM.dd');

  return formattedDate;
};
