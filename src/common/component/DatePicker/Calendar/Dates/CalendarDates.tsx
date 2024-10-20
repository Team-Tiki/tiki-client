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
    isSameMonth(currentMonth, date); // 현재 달 내에만 적용

  // 날짜에 따른 스타일을 결정하는 함수
  const getDateStyle = (date: Date) => {
    const isSelected = selectedDate && isSameDay(selectedDate, date); // 시작 날짜인지 확인
    const isEndDate = endDate && isSameDay(endDate, date); // 종료 날짜인지 확인
    const isSameStartEndDate = isSelected && isEndDate; // 시작과 종료가 동일한 날짜인지 확인
    const isInRange = isDateInRange(date); // 현재 달의 날짜가 선택된 기간 내에 있는지 확인

    const isStartOfWeek = getDay(date) === 0 && isInRange; // 일요일이며 선택된 기간 내에 있는지 확인
    const isEndOfWeek = getDay(date) === 6 && isInRange; // 토요일이며 선택된 기간 내에 있는지 확인
    const isStartOfMonth = isSameDay(date, startOfMonth(currentMonth)); // 현재 달의 첫날인지 확인
    const isEndOfMonth = isSameDay(date, endOfMonth(currentMonth)); // 현재 달의 마지막 날인지 확인

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
      // 현재 달에 속하는 경우 처리
      if (endDate && selectedDate) {
        // 시작과 종료가 같은 날짜일 때
        if (isSameStartEndDate) return selectedDateStyle;

        // 종료 날짜가 달의 첫 번째 날인 경우
        if (isStartOfMonth && isEndDate) return selectedDateStyle;

        // 시작 날짜가 달의 마지막 날인 경우
        if (isEndOfMonth && isSelected) return selectedDateStyle;

        // 일반적인 경우는 기존 스타일
        if (isSelected || (isStartOfWeek && isInRange) || (isStartOfMonth && isInRange)) {
          return selectedStartDateStyle;
        }

        if (isEndDate || (isEndOfWeek && isInRange) || (isEndOfMonth && isInRange)) {
          return selectedEndDateStyle;
        }

        // 기간 내에 있는 날짜
        if (isInRange) {
          return rangeDateStyle;
        }
      } else if (isSelected) {
        // 단일 선택일 경우 selectedDateStyle 적용
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
