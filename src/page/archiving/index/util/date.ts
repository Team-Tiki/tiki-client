import { format } from 'date-fns';

export const getMonthDate = (month: number, currentYear: number) => {
  const monthIndex = month;

  return new Date(currentYear, monthIndex);
};

export const formattingDate = (date: Date) => {
  const formattedDate = format(date, 'yyyy.MM.dd');

  return formattedDate;
};
