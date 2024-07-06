import Button from '@/common/component/Button/Button';

import { months } from '../constant/date';
import { headerStyle, monthBtnStyle } from './MonthHeader.style';

interface MonthHeaderProps {}

const MonthHeader = ({}: MonthHeaderProps) => {
  return (
    <section css={headerStyle}>
      {months.map((month) => (
        <Button key={month} variant="primary" css={[monthBtnStyle]}>
          {month}
        </Button>
      ))}
    </section>
  );
};

export default MonthHeader;
