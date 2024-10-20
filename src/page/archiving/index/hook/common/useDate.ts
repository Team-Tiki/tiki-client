import { endOfMonth } from 'date-fns';

import { useRef, useState } from 'react';

export const useDate = (teamId?: string) => {
  const ref = useRef<HTMLDivElement>(null);

  const currentDate = new Date();

  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [updatedTeamId, setUpdatedTeamId] = useState(teamId);

  const date = new Date(currentYear, currentMonth - 1);
  const endDay = endOfMonth(date);

  /** teamId가 변경될 때마다 selectedMonth 초기화 */
  if (teamId !== updatedTeamId) {
    setUpdatedTeamId(teamId);
    setCurrentMonth(1);
  }

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => prevMonth - 1);
    ref?.current?.scrollTo(0, 0);

    if (currentMonth <= 1) {
      setCurrentMonth(12);
      setCurrentYear((prevYear) => prevYear - 1);
    }
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => prevMonth + 1);
    ref?.current?.scrollTo(0, 0);

    if (currentMonth >= 12) {
      setCurrentMonth(1);
      setCurrentYear((prevYear) => prevYear + 1);
    }
  };

  return {
    ref,
    currentDate,
    currentYear,
    handlePrevMonth,
    handleNextMonth,
    currentMonth,
    date,
    endDay,
  };
};
