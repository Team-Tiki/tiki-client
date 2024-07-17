import {
  bodyStyle,
  dayHeaderStyle,
  dayStyle,
  selectedDayStyle,
} from '@/page/archiving/index/component/DaySection/DaySection.style';

import Circle from '@/common/asset/svg/circle.svg?react';
import Dotted from '@/common/asset/svg/dotted_line.svg?react';
import Flex from '@/common/component/Flex/Flex';

interface DaySectionProps {
  day: number;
  isEven: boolean;
  isToday: boolean;
}

const DaySection = ({ day, isEven, isToday }: DaySectionProps) => {
  return (
    <Flex css={dayStyle(isEven)}>
      <Flex css={dayHeaderStyle}>{day}</Flex>
      <Flex css={bodyStyle(isEven)} />
      {isToday && (
        <>
          <Circle width={8} height={8} css={selectedDayStyle} />
          <Dotted width={2} height={500} css={[selectedDayStyle, { top: '3rem', left: '2.8rem' }]} />
        </>
      )}
    </Flex>
  );
};

export default DaySection;
