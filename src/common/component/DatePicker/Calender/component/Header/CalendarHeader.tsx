import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

import CaretLeftIcon from '@/common/asset/svg/arrow-left.svg?react';
import CaretRightIcon from '@/common/asset/svg/arrow-right.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';

interface CalendarHeaderProps {
  currentMonth: Date;
  prevMonth: () => void;
  nextMonth: () => void;
}

const CalendarHeader = ({ currentMonth, prevMonth, nextMonth }: CalendarHeaderProps) => (
  <Flex styles={{ justify: 'center', align: 'center', gap: '1rem' }}>
    <CaretLeftIcon onClick={prevMonth} width={10} height={10} css={{ cursor: 'pointer' }} />
    <Heading tag="H6" css={{ width: '10rem', textAlign: 'center' }}>
      {format(currentMonth, 'yyyy년 MM월', { locale: ko })}
    </Heading>
    <CaretRightIcon onClick={nextMonth} width={10} height={10} css={{ cursor: 'pointer' }} />
  </Flex>
);

export default CalendarHeader;
