import { ERROR } from '@/page/archiving/constant/error';
import { formatDateString, isValidDate, parseDate } from '@/page/archiving/util/dateUtils';

import { useState } from 'react';

const useDateRange = (
  initialStartDate = '',
  initialEndDate = '',
  onSetStartDate: (date: string | ((prev: string) => string)) => void,
  onSetEndDate: (date: string | ((prev: string) => string)) => void,
  onSetIsDateRangeValid: (isValid: boolean) => void
) => {
  const [dates, setDates] = useState({ startDate: initialStartDate, endDate: initialEndDate });
  const [validation, setValidation] = useState({
    isStartDateValid: true,
    isEndDateValid: true,
    isStartDateError: false,
    isEndDateError: false,
    errorMessage: '',
  });
  const [isDateRangeValid, setIsDateRangeValid] = useState(false);

  const handleChange = (dateType: 'startDate' | 'endDate', value: string, otherIsValid: boolean, isStart: boolean) => {
    const input = value.replace(/\D/g, '');
    const formattedDate = input.length <= 8 ? formatDateString(input) : input;
    setDates((prev) => {
      const newDates = { ...prev, [dateType]: formattedDate };
      onSetStartDate(newDates.startDate);
      onSetEndDate(newDates.endDate);
      return newDates;
    });

    const isValid = input.length === 8 && isValidDate(formattedDate);
    setValidation((prev) => ({
      ...prev,
      [isStart ? 'isStartDateValid' : 'isEndDateValid']: isValid,
    }));

    if (!input) {
      setValidation((prev) => ({
        ...prev,
        [isStart ? 'isStartDateError' : 'isEndDateError']: true,
        errorMessage: isStart ? ERROR.START : ERROR.END,
      }));
      setIsDateRangeValid(false);
      onSetIsDateRangeValid(false);
    } else if (formattedDate.length === 10) {
      if (!isValid || !otherIsValid) {
        setValidation((prev) => ({
          ...prev,
          [isStart ? 'isStartDateError' : 'isEndDateError']: true,
          errorMessage: ERROR.OTHER,
        }));
        setIsDateRangeValid(false);
        onSetIsDateRangeValid(false);
      } else {
        checkDateRange(formattedDate, dates.startDate, dates.endDate, isStart);
      }
    } else {
      setValidation((prev) => ({
        ...prev,
        [isStart ? 'isStartDateError' : 'isEndDateError']: false,
        errorMessage: '',
      }));
      setIsDateRangeValid(false);
      onSetIsDateRangeValid(false);
    }
  };

  const checkDateRange = (formattedDate: string, startDate: string, endDate: string, isStart: boolean) => {
    const start = parseDate(isStart ? formattedDate : startDate);
    const end = parseDate(isStart ? endDate : formattedDate);
    if (start && end) {
      const isValidRange = start <= end;
      setIsDateRangeValid(isValidRange);
      onSetIsDateRangeValid(isValidRange);
      if (!isValidRange) {
        setValidation({
          isStartDateValid: true,
          isEndDateValid: true,
          isStartDateError: isStart,
          isEndDateError: !isStart,
          errorMessage: ERROR.OTHER,
        });
      } else {
        setValidation({
          isStartDateValid: true,
          isEndDateValid: true,
          isStartDateError: false,
          isEndDateError: false,
          errorMessage: '',
        });
      }
    } else {
      setIsDateRangeValid(true);
      onSetIsDateRangeValid(true);
      setValidation({
        isStartDateValid: true,
        isEndDateValid: true,
        isStartDateError: false,
        isEndDateError: false,
        errorMessage: '',
      });
    }
  };

  return {
    dates,
    validation,
    isDateRangeValid,
    handleChange,
  };
};

export default useDateRange;
