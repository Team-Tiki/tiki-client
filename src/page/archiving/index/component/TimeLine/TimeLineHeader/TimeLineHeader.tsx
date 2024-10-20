import ArrowLeft from '@/common/asset/svg/ic_arrow_back.svg?react';
import ArrowRight from '@/common/asset/svg/ic_arrow_forward.svg?react';

import {
  arrowStyle,
  buttonStyle,
  commonStyle,
  dateStyle,
  headerStyle,
} from '@/page/archiving/index/component/TimeLine/TimeLineHeader/TimeLineHeader.style';

interface TimeLineHeaderProps {
  currentYear: number;
  currentMonth: number;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
}

const TimeLineHeader = ({ currentYear, currentMonth, onPrevMonth, onNextMonth }: TimeLineHeaderProps) => {
  return (
    <header css={headerStyle}>
      <ArrowLeft
        width={32}
        height={32}
        css={[commonStyle, arrowStyle]}
        role="button"
        tabIndex={0}
        onClick={onPrevMonth}
      />
      <span css={dateStyle}>
        {currentYear}년 {currentMonth}월
      </span>
      <ArrowRight
        width={32}
        height={32}
        css={[commonStyle, arrowStyle]}
        role="button"
        tabIndex={0}
        onClick={onNextMonth}
      />
      <button css={[commonStyle, buttonStyle]} tabIndex={0}>
        오늘
      </button>
    </header>
  );
};

export default TimeLineHeader;
