import { isSameDay, isSameMonth } from 'date-fns';

import {
  dateStyle,
  datesContainerStyle,
  hoverDateStyle,
  outOfMonthStyle,
  selectedDateStyle,
} from '@/common/component/DatePicker/Calendar/Calendar.style';

interface CalendarDatesProps {
  currentMonth: Date;
  currentMonthAllDates: Date[];
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const CalendarDates = ({ currentMonth, currentMonthAllDates, selectedDate, setSelectedDate }: CalendarDatesProps) => (
  <div css={datesContainerStyle}>
    {currentMonthAllDates.map((date, index) => (
      <div
        role="button"
        tabIndex={0}
        aria-label={`${date.getMonth() + 1}월 ${date.getDate()}일`}
        key={index}
        css={[
          dateStyle,
          isSameMonth(currentMonth, date) ? '' : outOfMonthStyle,
          isSameDay(selectedDate, date) ? selectedDateStyle : hoverDateStyle,
        ]}
        onClick={() => setSelectedDate(date)}
        onKeyDown={(e) => (e.key === 'Enter' ? setSelectedDate(date) : null)}>
        {date.getDate()}
      </div>
    ))}
  </div>
);

export default CalendarDates;
