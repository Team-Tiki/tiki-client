import ArrowLeft from '@/common/asset/svg/ic_arrow_back.svg?react';
import ArrowRight from '@/common/asset/svg/ic_arrow_forward.svg?react';
import Button from '@/common/component/Button/Button';

import { dateStyle, headerStyle } from '@/page/archiving/index/component/TimeLine/TimeLineHeader/TimeLineHeader.style';

interface TimeLineHeaderProps {
  currentYear: number;
  currentMonth: number;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
}

const TimeLineHeader = ({ currentYear, currentMonth, onPrevMonth, onNextMonth }: TimeLineHeaderProps) => {
  return (
    <header css={headerStyle}>
      <Button variant="outline" css={{ padding: '0.6rem', margin: '0' }} onClick={onPrevMonth} tabIndex={0}>
        <ArrowLeft width={20} height={20} />
      </Button>
      <span css={dateStyle}>
        {currentYear}년 {currentMonth}월
      </span>
      <Button variant="outline" css={{ padding: '0.6rem' }} onClick={onNextMonth} tabIndex={0}>
        <ArrowRight width={20} height={20} />
      </Button>

      <Button variant="outline" size="small">
        오늘
      </Button>
    </header>
  );
};

export default TimeLineHeader;
