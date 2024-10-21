import { endOfMonth, getDay, isSameDay, isSameMonth, isWithinInterval, startOfMonth } from 'date-fns';

import {
  hoverDateStyle,
  rangeDateStyle,
  selectedDateStyle,
  selectedEndDateStyle,
  selectedStartDateStyle,
} from '@/common/component/DatePicker/Calendar/Calendar.style';

export const getDateStyle = (date: Date, selectedDate: Date | null, endDate: Date | null, currentMonth: Date) => {
  // 현재 달의 날짜가 선택된 날짜 범위 내에 있는지 확인
  const handleDateInRange = (date: Date) =>
    selectedDate &&
    endDate &&
    isWithinInterval(date, { start: selectedDate, end: endDate }) &&
    isSameMonth(currentMonth, date);

  const isSelected = selectedDate && isSameDay(selectedDate, date);
  const isEndDate = endDate && isSameDay(endDate, date);
  const isSameStartEndDate = isSelected && isEndDate;
  const isInRange = handleDateInRange(date);

  const isStartOfWeek = getDay(date) === 0 && isInRange; // 일요일이며 선택된 기간 내에 있는지 확인
  const isEndOfWeek = getDay(date) === 6 && isInRange; // 토요일이며 선택된 기간 내에 있는지 확인
  const isStartOfMonth = isSameDay(date, startOfMonth(currentMonth));
  const isEndOfMonth = isSameDay(date, endOfMonth(currentMonth));

  //// 선택된 날짜가 월의 마지막 날인지 확인
  const isStartDateEndOfMonth = selectedDate && isSameDay(selectedDate, endOfMonth(currentMonth));
  // 종료 날짜가 다음 달의 첫 번째 날인지 확인
  const isEndDateStartOfNextMonth = endDate && isSameDay(endDate, startOfMonth(currentMonth));

  if (isStartDateEndOfMonth && isInRange) {
    return selectedDateStyle;
  }

  if (isEndDateStartOfNextMonth && isInRange) {
    return selectedDateStyle;
  }

  if (isSameMonth(currentMonth, date)) {
    if (endDate && selectedDate) {
      if (isSameStartEndDate) return selectedDateStyle;
      if (isStartOfMonth && isEndDate) return selectedDateStyle;
      if (isEndOfMonth && isSelected) return selectedDateStyle;
      if (isSelected || (isStartOfWeek && isInRange) || (isStartOfMonth && isInRange)) {
        return selectedStartDateStyle;
      }
      if (isEndDate || (isEndOfWeek && isInRange) || (isEndOfMonth && isInRange)) {
        return selectedEndDateStyle;
      }
      if (isInRange) {
        return rangeDateStyle;
      }
    } else if (isSelected) {
      return selectedDateStyle;
    } else {
      return hoverDateStyle;
    }
  }

  return '';
};
