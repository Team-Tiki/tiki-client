import {
  dayHeaderStyle,
  dayStyle,
  selectedDayStyle,
} from '@/page/archiving/index/component/DaySection/DaySection.style';

import Circle from '@/common/asset/svg/circle.svg?react';
import Flex from '@/common/component/Flex/Flex';
import { theme } from '@/common/style/theme/theme';

interface DaySectionProps {
  day: number;
  isEven: boolean;
  isToday: boolean;
}
const DottedDayLine = () => {
  return (
    <div
      css={{
        position: 'absolute',
        top: '3.2rem',
        right: '2.8rem',

        width: '0.2rem',
        height: '100vh',

        zIndex: theme.zIndex.overlayMiddle,

        borderLeft: `1px dashed ${theme.colors.blue_900}`,

        pointerEvents: 'none',
      }}
    />
  );
};

const DaySection = ({ day, isEven, isToday }: DaySectionProps) => {
  return (
    <Flex tag="section" css={dayStyle(isEven, isToday)}>
      <Flex css={dayHeaderStyle(isToday)}>{day}</Flex>
      {isToday && (
        <>
          <Circle width={8} height={8} css={selectedDayStyle} />
          <DottedDayLine />
        </>
      )}
    </Flex>
  );
};

export default DaySection;
