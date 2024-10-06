import { format, isSameDay, isSameMonth } from 'date-fns';
import { ko } from 'date-fns/locale';

// 한국어 로케일을 import
import CaretLeftIcon from '@/common/asset/svg/arrow-left.svg?react';
import CaretRightIcon from '@/common/asset/svg/arrow-right.svg?react';
import {
  containerStyle,
  dateStyle,
  datesContainerStyle,
  dayStyle,
  hoverDateStyle,
  outOfMonthStyle,
  selectedDateStyle,
} from '@/common/component/DatePicker/Calender/Calender.style';
import useCalender from '@/common/hook/useCalender';

import Flex from '../../Flex/Flex';
import Heading from '../../Heading/Heading';
import Text from '../../Text/Text';

interface CalenderProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

export default function Calender({ selectedDate, setSelectedDate }: CalenderProps) {
  const { currentMonth, currentMonthAllDates, weekDays, nextMonth, prevMonth } = useCalender(selectedDate);

  return (
    <div css={containerStyle}>
      <Flex styles={{ justify: 'center', align: 'center', gap: '1rem' }}>
        <CaretLeftIcon onClick={prevMonth} width={10} height={10} />
        <Heading tag="H6" css={{ width: '10rem', textAlign: 'center' }}>
          {format(currentMonth, 'yyyy년 MM월', { locale: ko })}
        </Heading>
        <CaretRightIcon onClick={nextMonth} width={10} height={10} />
      </Flex>
      <div css={datesContainerStyle}>
        {weekDays.map((day, index) => (
          <Text tag="body8" key={index} css={dayStyle}>
            {day}
          </Text>
        ))}
      </div>
      <div css={datesContainerStyle}>
        {currentMonthAllDates.map((date, index) => (
          <div
            key={index}
            css={[
              dateStyle,
              isSameMonth(currentMonth, date) ? '' : outOfMonthStyle,
              isSameDay(selectedDate, date) ? selectedDateStyle : hoverDateStyle,
            ]}
            onClick={() => setSelectedDate(date)}>
            {date.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
}
