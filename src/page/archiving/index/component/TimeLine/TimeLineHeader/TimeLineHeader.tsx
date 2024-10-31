import ArrowLeft from '@/common/asset/svg/ic_arrow_back.svg?react';
import ArrowRight from '@/common/asset/svg/ic_arrow_forward.svg?react';
import Button from '@/common/component/Button/Button';

import { useDateProvider } from '@/page/archiving/index/DateProvider';
import { dateStyle, headerStyle } from '@/page/archiving/index/component/TimeLine/TimeLineHeader/TimeLineHeader.style';

const TimeLineHeader = () => {
  const { currentYear, currentMonth, handlePrevMonth, handleNextMonth, handleToday } = useDateProvider();

  return (
    <header css={headerStyle}>
      <Button variant="outline" css={{ padding: '0.6rem', margin: '0' }} onClick={handlePrevMonth} tabIndex={0}>
        <ArrowLeft width={20} height={20} />
      </Button>
      <span css={dateStyle}>
        {currentYear}년 {currentMonth}월
      </span>
      <Button variant="outline" css={{ padding: '0.6rem' }} onClick={handleNextMonth} tabIndex={0}>
        <ArrowRight width={20} height={20} />
      </Button>

      <Button variant="outline" size="small" onClick={handleToday}>
        오늘
      </Button>
    </header>
  );
};

export default TimeLineHeader;
