import { memo } from 'react';

import Flex from '@/common/component/Flex/Flex';

import { dayHeaderStyle, dayStyle, entireDayStyle } from '@/page/archiving/index/component/DaySection/DaySection.style';
import { useDate } from '@/page/archiving/index/hook/common/useDate';

interface DaySectionProps {
  endDay: Date;
}

const DaySection = memo(({ endDay }: DaySectionProps) => {
  const { currentDate, currentYear, currentMonth } = useDate();

  return (
    <div css={entireDayStyle}>
      {Array.from({ length: endDay.getDate() }, (_, day) => {
        const isToday =
          day + 1 === currentDate.getDate() &&
          currentYear === currentDate.getFullYear() &&
          currentMonth === currentDate.getMonth() + 1;

        return (
          <Flex css={dayStyle} key={day}>
            <Flex css={dayHeaderStyle(isToday)}>{day + 1}</Flex>
          </Flex>
        );
      })}
    </div>
  );
});

export default DaySection;
