import { endOfMonth } from 'date-fns';

import { useState } from 'react';

import { MonthType } from '@/page/archiving/index/type/monthType';
import { getMonthDate } from '@/page/archiving/index/util/date';

export const useDate = (ref?: React.RefObject<HTMLDivElement>) => {
  const currentDate = new Date();

  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [selectedMonthString, setSelectedMonthString] = useState<MonthType>(
    `${currentDate.getMonth() + 1}월` as MonthType
  );

  const dateOfMonth = getMonthDate(selectedMonthString, currentYear);
  const endDay = endOfMonth(dateOfMonth);

  const handlePrevYear = () => {
    setCurrentYear((prevYear) => prevYear - 1);
    setSelectedMonthString('1월');
    ref?.current?.scrollTo(0, 0);
  };

  const handleNextYear = () => {
    setCurrentYear((prevYear) => prevYear + 1);
    setSelectedMonthString('1월');
    ref?.current?.scrollTo(0, 0);
  };

  return {
    currentDate,
    currentYear,
    selectedMonthString,
    setSelectedMonthString,
    handlePrevYear,
    handleNextYear,
    dateOfMonth,
    endDay,
  };
};
