import { endOfMonth, getDay, isSameDay, isSameMonth, isWithinInterval, startOfMonth } from 'date-fns';

import {
  dateStyle,
  datesContainerStyle,
  hoverDateStyle,
  rangeDateStyle,
  selectedDateStyle,
  selectedEndDateStyle,
  selectedStartDateStyle,
} from '@/common/component/DatePicker/Calendar/Calendar.style';

interface CalendarDatesProps {
  currentMonth: Date;
  currentMonthAllDates: Date[];
  selectedDate: Date | null;
  endDate: Date | null;
  setSelectedDate: (date: Date) => void;
  variant: 'single' | 'range';
}

const CalendarDates = ({
  currentMonth,
  currentMonthAllDates,
  selectedDate,
  endDate,
  setSelectedDate,
}: CalendarDatesProps) => {
  // 현재 달에 해당하는 날짜만 기간 내로 처리하는 함수
  const isDateInRange = (date: Date) =>
    selectedDate &&
    endDate &&
    isWithinInterval(date, { start: selectedDate, end: endDate }) &&
    isSameMonth(currentMonth, date);

  // 날짜에 따른 스타일을 결정하는 함수
  const getDateStyle = (date: Date) => {
    const isSelected = selectedDate && isSameDay(selectedDate, date);
    const isEndDate = endDate && isSameDay(endDate, date);
    const isSameStartEndDate = isSelected && isEndDate;
    const isInRange = isDateInRange(date); // 현재 달의 날짜가 선택된 기간 내에 있는지 확인

    const isStartOfWeek = getDay(date) === 0 && isInRange; // 일요일이며 선택된 기간 내에 있는지 확인
    const isEndOfWeek = getDay(date) === 6 && isInRange; // 토요일이며 선택된 기간 내에 있는지 확인
    const isStartOfMonth = isSameDay(date, startOfMonth(currentMonth));
    const isEndOfMonth = isSameDay(date, endOfMonth(currentMonth));

    const isStartDateEndOfMonth = selectedDate && isSameDay(selectedDate, endOfMonth(currentMonth)); // 시작 날짜가 달의 마지막 날인지 확인
    const isEndDateStartOfNextMonth = endDate && isSameDay(endDate, startOfMonth(currentMonth)); // 종료 날짜가 달의 첫째 날인지 확인

    // 달의 마지막 날이 시작 날짜일 때
    if (isStartDateEndOfMonth && isInRange) {
      return selectedDateStyle;
    }

    // 달의 첫 번째 날이 종료 날짜일 때
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

    return ''; // 해당 달이 아닌 날짜는 스타일 제거
  };

  return (
    <div css={datesContainerStyle}>
      {currentMonthAllDates.map((date, index) => (
        <div
          role="button"
          tabIndex={0}
          aria-label={`${date.getMonth() + 1}월 ${date.getDate()}일`}
          key={index}
          css={[dateStyle, getDateStyle(date)]}
          onClick={() => setSelectedDate(date)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setSelectedDate(date);
          }}>
          {isSameMonth(currentMonth, date) ? date.getDate() : ''}
        </div>
      ))}
    </div>
  );
};

export default CalendarDates;
