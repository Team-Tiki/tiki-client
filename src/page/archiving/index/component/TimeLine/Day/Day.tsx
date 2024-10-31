import { memo } from 'react';

import { dayHeaderStyle, dayStyle } from '@/page/archiving/index/component/TimeLine/Day/Day.style';

import { useDrawerIsOpen } from '@/shared/store/drawer';

import { useDateProvider } from '../../../DateProvider';

const Day = memo(() => {
  const { currentYear, currentMonth, endDay } = useDateProvider();

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

export default Day;
