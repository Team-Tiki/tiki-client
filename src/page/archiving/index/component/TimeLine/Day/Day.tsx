import { memo } from 'react';

import {
  dayBodyStyle,
  dayHeaderStyle,
  dayStyle,
  entireDayStyle,
} from '@/page/archiving/index/component/TimeLine/Day/Day.style';
import { useDate } from '@/page/archiving/index/hook/common/useDate';

interface DaySectionProps {
  endDay: Date;
}

const DaySection = memo(({ endDay }: DaySectionProps) => {
  const { currentDate, currentYear, currentMonth } = useDate();
  const dayCount = endDay.getDate();

  return (
    <div css={entireDayStyle}>
      <div css={dayStyle}>
        {Array.from({ length: dayCount }, (_, day) => {
          const isToday =
            day + 1 === currentDate.getDate() &&
            currentYear === currentDate.getFullYear() &&
            currentMonth === currentDate.getMonth() + 1;

          return (
            <header css={dayHeaderStyle(isToday)} key={day}>
              {day + 1}
            </header>
          );
        })}
      </div>
      <div css={dayBodyStyle}></div>
    </div>
  );
});

export default DaySection;
