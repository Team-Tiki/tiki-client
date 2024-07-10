import { bodyStyle, dayBtnStyle, dayStyle } from '@/page/archiving/component/DaySection/DaySection.style';

import Circle from '@/common/asset/svg/circle.svg?react';
import Flex from '@/common/component/Flex/Flex';
import { theme } from '@/common/style/theme/theme';

interface DaySectionProps {
  day: number;
  isClicked: boolean;
  isEven: boolean;
  onDayClick: () => void;
}

const DaySection = ({ day, isClicked, isEven, onDayClick }: DaySectionProps) => {
  return (
    <article css={dayStyle(isEven)}>
      <button css={dayBtnStyle(isClicked)} onClick={onDayClick}>
        {day}
      </button>
      {isClicked && (
        <Flex
          styles={{ position: 'relative', direction: 'column', align: 'center', justify: 'center', bottom: '0.5rem' }}>
          <Circle width={9} height={8} css={{ backgroundColor: 'transparent', zIndex: theme.zIndex.overlayTop }} />
        </Flex>
      )}
      <div css={bodyStyle(isEven)} />
    </article>
  );
};

export default DaySection;
