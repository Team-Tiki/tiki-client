import { IcArrowBack, IcArrowForward } from '@tiki/icon';
import { Button } from '@tiki/ui';

import { useDateContext } from '@/page/archiving/index/DateProvider';
import { dateStyle, headerStyle } from '@/page/archiving/index/component/TimeLine/TimeLineHeader/TimeLineHeader.style';

const TimeLineHeader = () => {
  const { currentYear, currentMonth, handlePrevMonth, handleNextMonth, handleToday } = useDateContext();

  return (
    <header css={headerStyle}>
      <Button variant="outline" css={{ padding: '0.6rem'}} onClick={handlePrevMonth} tabIndex={0}>
        <IcArrowBack width={20} height={20} />
      </Button>
      <span css={dateStyle}>
        {currentYear}년 {currentMonth}월
      </span>
      <Button variant="outline" css={{ padding: '0.6rem' }} onClick={handleNextMonth} tabIndex={0}>
        <IcArrowForward width={20} height={20} />
      </Button>

      <Button variant="outline" size="small" onClick={handleToday}>
        오늘
      </Button>
    </header>
  );
};

export default TimeLineHeader;
