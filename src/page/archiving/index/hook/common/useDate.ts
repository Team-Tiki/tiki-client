import { MonthType } from '@/page/archiving/index/type/monthType';
import { getMonthDate } from '@/page/archiving/index/util/date';
import { endOfMonth } from 'date-fns';

import { useState } from 'react';

export const useDate = (ref: React.RefObject<HTMLDivElement>) => {
  const currentDate = new Date();

  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<MonthType>(`${currentDate.getMonth() + 1}월` as MonthType);
  const dateOfMonth = getMonthDate(selectedMonth, currentYear);
  const endDay = endOfMonth(dateOfMonth);

  const handlePrevYear = () => {
    setCurrentYear((prevYear) => prevYear - 1);
    setSelectedMonth('1월');
    ref.current?.scrollTo(0, 0);
  };

  const handleNextYear = () => {
    setCurrentYear((prevYear) => prevYear + 1);
    setSelectedMonth('1월');
    ref.current?.scrollTo(0, 0);
  };

  return {
    currentDate,
    currentYear,
    selectedMonth,
    setSelectedMonth,
    handlePrevYear,
    handleNextYear,
    dateOfMonth,
    endDay,
  };
};
