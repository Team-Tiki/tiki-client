import { MonthType } from '@/page/archiving/index/type/monthType';
import { getMonthDate } from '@/page/archiving/index/util/date';
import { endOfMonth } from 'date-fns';

import { useState } from 'react';

export const useDate = () => {
  const currentDate = new Date();

  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [selectedMonthType, setSelectedMonthType] = useState<MonthType>(`${currentDate.getMonth() + 1}월` as MonthType);
  const dateOfMonth = getMonthDate(selectedMonthType, currentYear);
  const endDay = endOfMonth(dateOfMonth);

  const handlePrevYear = () => {
    setCurrentYear((prevYear) => prevYear - 1);
  };

  const handleNextYear = () => {
    setCurrentYear((prevYear) => prevYear + 1);
  };

  return {
    currentDate,
    currentYear,
    selectedMonthType,
    setSelectedMonthType,
    handlePrevYear,
    handleNextYear,
    dateOfMonth,
    endDay,
  };
};
