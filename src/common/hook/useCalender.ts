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

// 한국어 locale 추가
import { useState } from 'react';

const useCalender = (initialDate: Date) => {
  const [currentMonth, setCurrentMonth] = useState(initialDate);

  const weekDays = [];
  const weekStartDate = startOfWeek(new Date());

  for (let day = 0; day < 7; day += 1) {
    // locale: ko를 추가하여 한글로 요일 표시
    weekDays.push(format(addDays(weekStartDate, day), 'EEEEE', { locale: ko }));
  }

  const currentMonthStart = startOfMonth(currentMonth);
  const currentMonthEnd = endOfMonth(currentMonth);
  const firstWeekStart = startOfWeek(currentMonthStart);
  const lastWeekEnd = endOfWeek(currentMonthEnd);
  const currentMonthAllDates = eachDayOfInterval({
    start: firstWeekStart,
    end: lastWeekEnd,
  });

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return {
    weekDays,
    currentMonthAllDates,
    currentMonth,
    nextMonth,
    prevMonth,
  };
};

export default useCalender;
