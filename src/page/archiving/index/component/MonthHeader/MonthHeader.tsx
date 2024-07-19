import {
  currentMonthStyle,
  headerStyle,
  monthBtnStyle,
} from '@/page/archiving/index/component/MonthHeader/MonthHeader.style';
import { MONTHS } from '@/page/archiving/index/constant/month';
import { Block } from '@/page/archiving/index/type/blockType';
import { MonthType } from '@/page/archiving/index/type/monthType';

import Button from '@/common/component/Button/Button';

interface MonthHeaderProps {
  currentMonth: MonthType;
  onMonthClick: (month: MonthType) => void;
  selectedBlock?: Block;
}

const MonthHeader = ({ currentMonth, onMonthClick, selectedBlock }: MonthHeaderProps) => {
  return (
    <header css={headerStyle(selectedBlock)}>
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
