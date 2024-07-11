import {
  bodyStyle,
  dayBtnStyle,
  dayStyle,
  selectedDayStyle,
} from '@/page/archiving/component/DaySection/DaySection.style';

import Circle from '@/common/asset/svg/circle.svg?react';
import Dotted from '@/common/asset/svg/dotted_line.svg?react';

interface DaySectionProps {
  day: number;
  isClicked: boolean;
  isEven: boolean;
  onDayClick: () => void;
}

const DaySection = ({ day, isClicked, isEven, onDayClick }: DaySectionProps) => {
  return (
    <div css={dayStyle(isEven)}>
      <button css={dayBtnStyle(isClicked)} type="button" onClick={onDayClick}>
        {day}
      </button>
      {isClicked && (
        <div css={selectedDayStyle}>
          <Circle width={8} height={8} css={{ backgroundColor: 'transparent' }} />
          <Dotted width={2} height={'80%'} css={{ display: 'flex' }} />
        </div>
      )}
      <div css={bodyStyle(isEven)} />
    </div>
  );
};

export default DaySection;
