import Button from '@/common/component/Button/Button';

import {
  currentMonthStyle,
  headerStyle,
  monthBtnStyle,
} from '@/page/archiving/index/component/MonthHeader/MonthHeader.style';
import { MONTHS } from '@/page/archiving/index/constant/month';
import { MonthType } from '@/page/archiving/index/type/monthType';

interface MonthHeaderProps {
  currentMonth: MonthType;
  onMonthClick: (month: MonthType) => void;
}

const MonthHeader = ({ currentMonth, onMonthClick }: MonthHeaderProps) => {
  return (
    <header css={headerStyle}>
      {MONTHS.map((month) => (
        <Button
          key={month}
          variant="primary"
          css={[monthBtnStyle, currentMonthStyle(currentMonth === month)]}
          onClick={() => onMonthClick(month)}>
          {month}
        </Button>
      ))}
    </header>
  );
};

export default MonthHeader;
