import { getDay, isSameDay, isSameMonth, isWithinInterval } from 'date-fns';

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
}: CalendarDatesProps) => (
  <div css={datesContainerStyle}>
    {currentMonthAllDates.map((date, index) => {
      const isSelected = selectedDate && isSameDay(selectedDate, date);
      const isEndDate = endDate && isSameDay(endDate, date);
      const isSameStartEndDate = isSelected && isEndDate;
      const isInRange = selectedDate && endDate && isWithinInterval(date, { start: selectedDate, end: endDate });

      const isStartOfWeek = getDay(date) === 0 && isInRange;

      const isEndOfWeek = getDay(date) === 6 && isInRange;

      return (
        <div
          role="button"
          tabIndex={0}
          aria-label={`${date.getMonth() + 1}월 ${date.getDate()}일`}
          key={index}
          css={[
            dateStyle,
            isSameMonth(currentMonth, date)
              ? endDate && selectedDate
                ? isSameStartEndDate // 시작 날짜와 종료 날짜가 같은 경우
                  ? selectedDateStyle // 중복 선택 시 selectedDateStyle 유지
                  : isSelected || isStartOfWeek // 선택된 날짜이거나 범위 내의 일요일이면
                    ? selectedStartDateStyle
                    : isEndDate || isEndOfWeek // 종료 날짜이거나 범위 내의 토요일이면
                      ? selectedEndDateStyle
                      : isInRange
                        ? rangeDateStyle
                        : hoverDateStyle
                : isSelected
                  ? selectedDateStyle
                  : hoverDateStyle
              : '', // 해당 달이 아닌 날짜는 스타일 제거
          ]}
          onClick={() => setSelectedDate(date)}
          onKeyDown={(e) => (e.key === 'Enter' ? setSelectedDate(date) : null)}>
          {isSameMonth(currentMonth, date) ? date.getDate() : ''}
        </div>
      );
    })}
  </div>
);

export default CalendarDates;
