import { headerStyle, monthBtnStyle } from '@/page/archiving/index/component/MonthHeader/MonthHeader.style';
import { MONTHS } from '@/page/archiving/index/constant/month';
import { Block } from '@/page/archiving/index/type/blockType';
import { MonthType } from '@/page/archiving/index/type/monthType';

import Button from '@/common/component/Button/Button';

interface MonthHeaderProps {
  onMonthClick: (month: MonthType) => void;
  blockSelected?: Block;
}

const MonthHeader = ({ onMonthClick, blockSelected }: MonthHeaderProps) => {
  return (
    <header css={headerStyle(blockSelected)}>
      {MONTHS.map((month) => (
        <Button key={month} variant="primary" css={monthBtnStyle} onClick={() => onMonthClick(month)}>
          {month}
        </Button>
      ))}
    </header>
  );
};

export default MonthHeader;
