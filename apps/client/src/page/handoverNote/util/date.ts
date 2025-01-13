import { format } from 'date-fns';

export const formattingDateWithBar = (date: Date) => {
  const formattedDate = format(date, 'yyyy-MM-dd');

  return formattedDate;
};
