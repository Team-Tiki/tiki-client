import { memo } from 'react';

import Circle from '@/common/asset/svg/ic_circle.svg?react';
import Flex from '@/common/component/Flex/Flex';
import { theme } from '@/common/style/theme/theme';

import {
  dayHeaderStyle,
  dayStyle,
  selectedDayStyle,
} from '@/page/archiving/index/component/DaySection/DaySection.style';
import { useDate } from '@/page/archiving/index/hook/common/useDate';

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

const DaySection = memo(({ endDay }: DaySectionProps) => {
  const { currentDate, currentYear, selectedMonthString } = useDate();

  return (
    <>
      {Array.from({ length: endDay.getDate() }, (_, day) => {
        const isEven = (day + 1) % 2 === 0;
        const isToday =
          day + 1 === currentDate.getDate() &&
          currentYear === currentDate.getFullYear() &&
          selectedMonthString === `${currentDate.getMonth() + 1}월`;

        return (
          <Flex css={dayStyle(isEven, isToday)} key={day}>
            <Flex css={dayHeaderStyle(isToday)}>{day + 1}</Flex>
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
});

export default DaySection;
