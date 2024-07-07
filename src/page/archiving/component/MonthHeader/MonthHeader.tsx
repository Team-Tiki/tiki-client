import { monthBtnStyle } from '@/page/archiving/component/MonthHeader/MonthHeader.style';
import { MONTHS } from '@/page/archiving/constant/month';

import Button from '@/common/component/Button/Button';
import { headerStyle } from '@/common/component/Header/Header.style';

interface MonthHeaderProps {
  onMonthClick: (month: string) => void;
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
