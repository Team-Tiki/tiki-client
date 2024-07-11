import { ERROR } from '@/page/archiving/constant/error';
import { formatDateString, isValidDate, parseDate } from '@/page/archiving/util/dateUtils';

import { useCallback, useState } from 'react';

const useDateRange = (initialStartDate: string, initialEndDate: string) => {
  const [startDate, setStartDate] = useState<string>(initialStartDate);
  const [endDate, setEndDate] = useState<string>(initialEndDate);
  const [dateValidation, setDateValidation] = useState({
    isStartDateValid: true,
    isEndDateValid: true,
    isStartDateError: false,
    isEndDateError: false,
    errorMessage: '',
    isDateRangeValid: false,
  });

  const validateDateRange = useCallback((formattedDate: string, otherDate: string, isStart: boolean) => {
    const start = parseDate(isStart ? formattedDate : otherDate);
    const end = parseDate(isStart ? otherDate : formattedDate);
    if (start && end) {
      const isValidRange = start <= end;
      setDateValidation((prev) => ({
        ...prev,
        isDateRangeValid: isValidRange,
        errorMessage: isValidRange ? '' : ERROR.OTHER,
        isStartDateError: isStart ? !isValidRange : prev.isStartDateError,
        isEndDateError: isStart ? prev.isEndDateError : !isValidRange,
      }));
    } else {
      setDateValidation((prev) => ({
        ...prev,
        isDateRangeValid: false,
        errorMessage: ERROR.OTHER,
        isStartDateError: isStart,
        isEndDateError: !isStart,
      }));
    }
  }, []);

  const handleChange = useCallback(
    (input: string, setDate: (date: string | ((prev: string) => string)) => void, isStart: boolean) => {
      const formattedDate = input.length <= 8 ? formatDateString(input) : input;
      setDate(formattedDate);

      const isValid = input.length === 8 && isValidDate(formattedDate);
      setDateValidation((prev) => ({
        ...prev,
        [isStart ? 'isStartDateValid' : 'isEndDateValid']: isValid,
        [isStart ? 'isStartDateError' : 'isEndDateError']: !input || (formattedDate.length === 10 && !isValid),
        errorMessage: !input
          ? isStart
            ? ERROR.START
            : ERROR.END
          : formattedDate.length === 10 && !isValid
            ? ERROR.OTHER
            : '',
        isDateRangeValid: false,
      }));

      if (formattedDate.length === 10 && isValid) {
        validateDateRange(formattedDate, isStart ? endDate : startDate, isStart);
      }
    },
    [endDate, startDate, validateDateRange]
  );

  return {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    handleChange,
    dateValidation,
  };
};

export default useDateRange;
