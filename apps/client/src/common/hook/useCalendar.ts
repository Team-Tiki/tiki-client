import {
  addDays,
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns';
import { ko } from 'date-fns/locale';

import { useState } from 'react';

const useCalender = (initialDate: Date) => {
  const [currentMonth, setCurrentMonth] = useState(initialDate);

  const weekStartDate = startOfWeek(new Date());
  const weekDays = Array.from({ length: 7 }, (_, i) => format(addDays(weekStartDate, i), 'EEEEE', { locale: ko }));

  const currentMonthStart = startOfMonth(currentMonth);
  const currentMonthEnd = endOfMonth(currentMonth);
  const firstWeekStart = startOfWeek(currentMonthStart);
  const lastWeekEnd = endOfWeek(currentMonthEnd);
  const currentMonthAllDates = eachDayOfInterval({
    start: firstWeekStart,
    end: lastWeekEnd,
  });

  const toNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const toPrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return {
    weekDays,
    currentMonthAllDates,
    currentMonth,
    toNextMonth,
    toPrevMonth,
  };
};

export default useCalender;
