import { headerStyle, monthBtnStyle } from '@/page/archiving/component/MonthHeader/MonthHeader.style';
import { MONTHS } from '@/page/archiving/constant/month';
import { MonthType } from '@/page/archiving/type/monthType';

import Button from '@/common/component/Button/Button';

interface MonthHeaderProps {
  onMonthClick: (month: MonthType) => void;
}

const MonthHeader = ({ onMonthClick }: MonthHeaderProps) => {
  return (
    <section css={headerStyle}>
      {MONTHS.map((month) => (
        <Button key={month} variant="primary" css={monthBtnStyle} onClick={() => onMonthClick(month)}>
          {month}
        </Button>
      ))}
    </section>
  );
};

export default MonthHeader;
