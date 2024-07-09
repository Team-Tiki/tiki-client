import { MONTHS } from '@/page/archiving/constant/month';
import { MonthType } from '@/page/archiving/type/monthType';

export const getMonthDate = (monthName: MonthType, currentYear: number) => {
  const monthIndex = MONTHS.indexOf(monthName);

  return new Date(currentYear, monthIndex);
};
