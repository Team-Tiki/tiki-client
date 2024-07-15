import { headerStyle, monthBtnStyle } from '@/page/archiving/component/MonthHeader/MonthHeader.style';
import { MONTHS } from '@/page/archiving/constant/month';
import { Block } from '@/page/archiving/type/blockType';
import { MonthType } from '@/page/archiving/type/monthType';

import Button from '@/common/component/Button/Button';

interface MonthHeaderProps {
  onMonthClick: (month: MonthType) => void;
  blockSelected: Block | undefined;
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
