import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

import ArrowLeft from '@/common/asset/svg/ic_arrow_left.svg?react';
import ArrowRight from '@/common/asset/svg/ic_arrow_right.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';

interface CalendarHeaderProps {
  currentMonth: Date;
  onClickPrev: () => void;
  onClickNext: () => void;
}

const CalendarHeader = ({ currentMonth, onClickPrev, onClickNext }: CalendarHeaderProps) => (
  <Flex styles={{ justify: 'center', align: 'center', gap: '1rem' }}>
    <ArrowLeft onClick={onClickPrev} width={10} height={10} css={{ cursor: 'pointer' }} />
    <Heading tag="H6" css={{ width: '10rem', textAlign: 'center' }}>
      {format(currentMonth, 'yyyy년 MM월', { locale: ko })}
    </Heading>
    <ArrowRight onClick={onClickNext} width={10} height={10} css={{ cursor: 'pointer' }} />
  </Flex>
);

export default CalendarHeader;
