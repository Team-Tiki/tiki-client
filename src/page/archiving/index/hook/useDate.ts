import { MonthType } from '@/page/archiving/index/type/monthType';
import { getMonthDate } from '@/page/archiving/index/util/date';
import { endOfMonth } from 'date-fns';

import { useState } from 'react';

export const useDate = () => {
  const currentDate = new Date();

  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<MonthType>(`${currentDate.getMonth() + 1}월` as MonthType);
  const dateOfMonth = getMonthDate(selectedMonth, currentYear);
  const endDay = endOfMonth(dateOfMonth);

  const handlePrevYear = (currentYear: number) => {
    setCurrentYear(currentYear - 1);
  };

  const handleNextYear = (currentYear: number) => {
    setCurrentYear(currentYear + 1);
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
