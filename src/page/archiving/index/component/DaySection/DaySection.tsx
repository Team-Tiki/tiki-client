import {
  bodyStyle,
  dayHeaderStyle,
  dayStyle,
  selectedDayStyle,
} from '@/page/archiving/index/component/DaySection/DaySection.style';
import { useDate } from '@/page/archiving/index/hook/common/useDate';

import Circle from '@/common/asset/svg/circle.svg?react';
import Flex from '@/common/component/Flex/Flex';
import { theme } from '@/common/style/theme/theme';

interface DaySectionProps {
  endDay: Date;
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

const DaySection = ({ endDay }: DaySectionProps) => {
  const { currentDate, currentYear, selectedMonth } = useDate();

  return (
    <>
      {Array.from({ length: endDay.getDate() }, (_, day) => {
        const isEven = (day + 1) % 2 === 0;
        const isToday =
          day + 1 === currentDate.getDate() &&
          currentYear === currentDate.getFullYear() &&
          selectedMonth === `${currentDate.getMonth() + 1}월`;

        return (
          <Flex css={dayStyle(isEven, isToday)}>
            <Flex css={dayHeaderStyle}>{day + 1}</Flex>
            <Flex css={bodyStyle} />
            {isToday && (
              <>
                <Circle width={8} height={8} css={selectedDayStyle} />
                <DottedDayLine />
              </>
            )}
          </Flex>
        );
      })}
    </>
  );
};

export default DaySection;
