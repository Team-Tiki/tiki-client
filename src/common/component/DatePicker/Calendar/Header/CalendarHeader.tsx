import { format } from 'date-fns';

import ArrowLeft from '@/common/asset/svg/ic_calendar_arrow_left.svg?react';
import ArrowRight from '@/common/asset/svg/ic_calendar_arrow_right.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

interface CalendarHeaderProps {
  currentMonth: Date;
  onClickPrev: () => void;
  onClickNext: () => void;
}

const CalendarHeader = ({ currentMonth, onClickPrev, onClickNext }: CalendarHeaderProps) => (
  <Flex styles={{ justify: 'space-between', align: 'center', gap: '1rem' }}>
    <ArrowLeft onClick={onClickPrev} width={24} height={24} css={{ cursor: 'pointer' }} />
    <Text tag="body6" css={{ textAlign: 'center', fontWeight: 500 }}>
      {format(currentMonth, 'yyyy.MM')}
    </Text>
    <ArrowRight onClick={onClickNext} width={24} height={24} css={{ cursor: 'pointer' }} />
  </Flex>
);

export default CalendarHeader;
