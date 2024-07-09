import { MONTHS } from '@/page/archiving/constant/month';
import { MonthType } from '@/page/archiving/type/monthType';

export const getMonthDate = (monthName: MonthType) => {
  const monthIndex = MONTHS.indexOf(monthName);
  const year = new Date().getFullYear();
  console.log(new Date(year, monthIndex));
  return new Date(year, monthIndex);
};
