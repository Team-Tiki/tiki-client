import { memo } from 'react';

import {
  dayBodyStyle,
  dayHeaderStyle,
  dayStyle,
  entireDayStyle,
} from '@/page/archiving/index/component/TimeLine/Day/Day.style';

interface DaySectionProps {
  currentYear: number;
  currentMonth: number;
  endDay: Date;
}

const Day = memo(({ currentYear, currentMonth, endDay }: DaySectionProps) => {
  const dayCount = endDay.getDate();
  const currentDate = new Date();

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

export default Day;
