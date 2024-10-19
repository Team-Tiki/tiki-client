import { isSameDay, isSameMonth } from 'date-fns';

import {
  dateStyle,
  datesContainerStyle,
  hoverDateStyle,
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
        aria-label={isSameMonth(currentMonth, date) ? `${date.getMonth() + 1}월 ${date.getDate()}일` : ''}
        key={index}
        css={[
          dateStyle,
          isSameMonth(currentMonth, date) ? (isSameDay(selectedDate, date) ? selectedDateStyle : hoverDateStyle) : '', // 해당 달이 아닌 날짜는 스타일을 제거
        ]}
        onClick={() => isSameMonth(currentMonth, date) && setSelectedDate(date)}
        onKeyDown={(e) => (e.key === 'Enter' && isSameMonth(currentMonth, date) ? setSelectedDate(date) : null)}>
        {isSameMonth(currentMonth, date) ? date.getDate() : ''} {/* 해당 달이 아닌 날짜는 빈 문자열로 처리 */}
      </div>
    ))}
  </div>
);

export default CalendarDates;
