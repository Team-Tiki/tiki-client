import { endOfMonth } from 'date-fns';

import { useRef, useState } from 'react';

import { MonthType } from '@/page/archiving/index/type/monthType';
import { getMonthDate } from '@/page/archiving/index/util/date';

export const useDate = (teamId?: string) => {
  const ref = useRef<HTMLDivElement>(null);

  const currentDate = new Date();

  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [updatedTeamId, setUpdatedTeamId] = useState(teamId);
  const [selectedMonth, setSelectedMonth] = useState<MonthType>(`${currentDate.getMonth() + 1}월` as MonthType);

  const dateOfMonth = getMonthDate(selectedMonth, currentYear);
  const endDay = endOfMonth(dateOfMonth);

  /** teamId가 변경될 때마다 selectedMonth 초기화 */
  if (teamId !== updatedTeamId) {
    setUpdatedTeamId(teamId);
    setSelectedMonth(`${currentDate.getMonth() + 1}월` as MonthType);
  }

  const handlePrevYear = () => {
    setCurrentYear((prevYear) => prevYear - 1);
    setSelectedMonth('1월');
    ref?.current?.scrollTo(0, 0);
  };

  const handleNextYear = () => {
    setCurrentYear((prevYear) => prevYear + 1);
    setSelectedMonth('1월');
    ref?.current?.scrollTo(0, 0);
  };

  const handleMonthClick = (month: MonthType) => {
    setSelectedMonth(month);
    ref?.current?.scrollTo(0, 0);
  };

  return {
    ref,
    currentDate,
    currentYear,
    selectedMonth,
    setSelectedMonth,
    handlePrevYear,
    handleNextYear,
    dateOfMonth,
    endDay,
    handleMonthClick,
  };
};
