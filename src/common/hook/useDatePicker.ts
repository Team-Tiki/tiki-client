import { isBefore } from 'date-fns';

import { useState } from 'react';

export const useDatePicker = (variant: 'single' | 'range') => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSelectDate = (date: Date) => {
    if (variant === 'range') {
      if (!selectedDate || (selectedDate && endDate)) {
        setSelectedDate(date);
        setEndDate(null);
      } else {
        if (isBefore(date, selectedDate)) {
          setEndDate(selectedDate);
          setSelectedDate(date);
        } else {
          setEndDate(date);
        }
      }
    } else {
      setSelectedDate(date);
    }
  };

  return {
    selectedDate,
    endDate,
    handleSelectDate,
  };
};
