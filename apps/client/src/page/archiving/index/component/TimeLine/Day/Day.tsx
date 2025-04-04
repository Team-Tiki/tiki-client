import { memo } from 'react';

import { useDateContext } from '@/page/archiving/index/DateProvider';
import { dayHeaderStyle, dayStyle } from '@/page/archiving/index/component/TimeLine/Day/Day.style';

import { useDrawerIsOpen } from '@/shared/store/drawer';

const DayHeader = memo(() => {
  const { currentYear, currentMonth, endDay } = useDateContext();

  const dayCount = endDay.getDate();
  const currentDate = new Date();

  const isOpen = useDrawerIsOpen();

  return (
    <div css={dayStyle}>
      {Array.from({ length: dayCount }, (_, day) => {
        const isToday =
          day + 1 === currentDate.getDate() &&
          currentYear === currentDate.getFullYear() &&
          currentMonth === currentDate.getMonth() + 1;

        return (
          <header css={dayHeaderStyle(isToday, isOpen)} key={day}>
            {day + 1}
          </header>
        );
      })}
    </div>
  );
});

export default DayHeader;
