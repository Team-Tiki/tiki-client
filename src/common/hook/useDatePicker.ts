import { isBefore } from 'date-fns';

import { useState } from 'react';

export const useDatePicker = (
  variant: 'single' | 'range',
  onChange: (selectedDate: Date | null, endDate: Date | null) => void
) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSelectDate = (date: Date) => {
    if (variant === 'range') {
      if (!selectedDate || (selectedDate && endDate)) {
        setSelectedDate(date);
        setEndDate(null);
        onChange(date, null);
      } else {
        if (isBefore(date, selectedDate)) {
          setEndDate(selectedDate);
          setSelectedDate(date);
          onChange(date, selectedDate);
        } else {
          setEndDate(date);
          onChange(selectedDate, date);
        }
      }
    } else {
      setSelectedDate(date);
      onChange(date, null);
    }
  };

  const clearDates = () => {
    setSelectedDate(null);
    setEndDate(null);
    onChange(null, null);
  };

  return {
    selectedDate,
    endDate,
    handleSelectDate,
    clearDates,
  };
};
