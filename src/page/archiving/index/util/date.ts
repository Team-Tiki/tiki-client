import { format } from 'date-fns';

export const formattingDate = (date: Date) => {
  const formattedDate = format(date, 'yyyy.MM.dd');

  return formattedDate;
};
