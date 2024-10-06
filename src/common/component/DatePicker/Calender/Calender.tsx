import { format, isSameDay, isSameMonth } from 'date-fns';

import CaretLeftIcon from '@/common/asset/svg/arrow-left.svg?react';
import CaretRightIcon from '@/common/asset/svg/arrow-right.svg?react';
import {
  arrowContainerStyle,
  containerStyle,
  dateStyle,
  datesContainerStyle,
  dayStyle,
  daysContainerStyle,
  headerStyle,
  hoverDateStyle,
  iconStyle,
  monthDisplayStyle,
  outOfMonthStyle,
  selectedDateStyle,
} from '@/common/component/DatePicker/Calender/Calender.style';
import useCalender from '@/common/hook/useCalender';

interface CalenderProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

export default function Calender({ selectedDate, setSelectedDate }: CalenderProps) {
  const { currentMonth, currentMonthAllDates, weekDays, nextMonth, prevMonth } = useCalender(selectedDate);

  return (
    <div css={containerStyle}>
      <div css={headerStyle}>
        <div css={monthDisplayStyle}>
          <span>{format(currentMonth, 'MMM yyyy')}</span>
        </div>
        <div css={arrowContainerStyle}>
          <button type="button" onClick={prevMonth} aria-label="Previous Month">
            <CaretLeftIcon css={iconStyle} />
          </button>
          <button type="button" onClick={nextMonth} aria-label="Next Month">
            <CaretRightIcon css={iconStyle} />
          </button>
        </div>
      </div>
      <div css={daysContainerStyle}>
        {weekDays.map((day, index) => (
          <div key={index} css={dayStyle}>
            {day}
          </div>
        ))}
      </div>
      <div css={datesContainerStyle}>
        {currentMonthAllDates.map((date, index) => (
          <button
            key={index}
            css={[
              dateStyle,
              isSameMonth(currentMonth, date) ? '' : outOfMonthStyle,
              isSameDay(selectedDate, date) ? selectedDateStyle : hoverDateStyle,
            ]}
            onClick={() => setSelectedDate(date)}
            type="button">
            {date.getDate()}
          </button>
        ))}
      </div>
    </div>
  );
}
