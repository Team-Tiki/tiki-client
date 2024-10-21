import { isSameMonth } from 'date-fns';

import { dateStyle, datesContainerStyle } from '@/common/component/DatePicker/Calendar/Calendar.style';
import { getDateStyle } from '@/common/component/DatePicker/Calendar/Dates/util/dateStyle';

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
  return (
    <div css={datesContainerStyle}>
      {currentMonthAllDates.map((date, index) => (
        <div
          role="button"
          tabIndex={0}
          aria-label={`${date.getMonth() + 1}월 ${date.getDate()}일`}
          key={index}
          css={[dateStyle, getDateStyle(date, selectedDate, endDate, currentMonth)]}
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
