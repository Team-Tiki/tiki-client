import { endOfMonth } from 'date-fns';

import { useState } from 'react';

export const useDate = (teamId?: string) => {
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

    if (currentMonth <= 1) {
      setCurrentMonth(12);
      setCurrentYear((prevYear) => prevYear - 1);
    }
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => prevMonth + 1);

    if (currentMonth >= 12) {
      setCurrentMonth(1);
      setCurrentYear((prevYear) => prevYear + 1);
    }
  };

  const handleToday = () => {
    setCurrentYear(currentDate.getFullYear());
    setCurrentMonth(currentDate.getMonth() + 1);
  };

  return {
    currentDate,
    currentYear,
    handlePrevMonth,
    handleNextMonth,
    currentMonth,
    handleToday,
    date,
    endDay,
  };
};
