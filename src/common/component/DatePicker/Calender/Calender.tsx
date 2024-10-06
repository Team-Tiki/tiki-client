import { format, isSameDay, isSameMonth } from 'date-fns';
import { ko } from 'date-fns/locale';

// 한국어 로케일을 import
import CaretLeftIcon from '@/common/asset/svg/arrow-left.svg?react';
import CaretRightIcon from '@/common/asset/svg/arrow-right.svg?react';
import {
  arrowContainerStyle,
  containerStyle,
  dateStyle,
  datesContainerStyle,
  dayStyle,
  daysContainerStyle,
  hoverDateStyle,
  iconStyle,
  monthDisplayStyle,
  outOfMonthStyle,
  selectedDateStyle,
} from '@/common/component/DatePicker/Calender/Calender.style';
import useCalender from '@/common/hook/useCalender';

import Flex from '../../Flex/Flex';

interface CalenderProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

export default function Calender({ selectedDate, setSelectedDate }: CalenderProps) {
  const { currentMonth, currentMonthAllDates, weekDays, nextMonth, prevMonth } = useCalender(selectedDate);

  return (
    <div css={containerStyle}>
      <Flex styles={{ justify: 'space-between', align: 'center' }}>
        <div css={monthDisplayStyle}>
          <span>{format(currentMonth, 'yyyy년 MM월', { locale: ko })}</span>
        </div>
        <div css={arrowContainerStyle}>
          <button type="button" onClick={prevMonth} aria-label="Previous Month">
            <CaretLeftIcon css={iconStyle} />
          </button>
          <button type="button" onClick={nextMonth} aria-label="Next Month">
            <CaretRightIcon css={iconStyle} />
          </button>
        </div>
      </Flex>
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
