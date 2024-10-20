import { memo, useLayoutEffect, useRef } from 'react';

import {
  dayBodyStyle,
  dayHeaderStyle,
  dayStyle,
  entireDayStyle,
} from '@/page/archiving/index/component/TimeLine/DaySection/DaySection.style';
import { useDate } from '@/page/archiving/index/hook/common/useDate';

interface DaySectionProps {
  endDay: Date;
  onGapChange: (gap: number) => void;
}

const DaySection = memo(({ endDay, onGapChange }: DaySectionProps) => {
  const { currentDate, currentYear, currentMonth } = useDate();
  const dayCount = endDay.getDate();
  const dayStyleRef = useRef<HTMLDivElement>(null);
  const headersRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (headersRef.current.length > 1 && headersRef.current[0] && headersRef.current[1]) {
      const firstHeader = headersRef.current[0].getBoundingClientRect();
      const secondHeader = headersRef.current[1].getBoundingClientRect();
      const calculatedGap = secondHeader.left - firstHeader.right;

      if (calculatedGap >= 0) {
        onGapChange(calculatedGap);
      }
    }
  }, [headersRef, onGapChange]);

  return (
    <div css={entireDayStyle}>
      <div css={dayStyle} ref={dayStyleRef}>
        {Array.from({ length: dayCount }, (_, day) => {
          const isToday =
            day + 1 === currentDate.getDate() &&
            currentYear === currentDate.getFullYear() &&
            currentMonth === currentDate.getMonth() + 1;

          return (
            <header
              css={dayHeaderStyle(isToday)}
              key={day}
              ref={(el) => (headersRef.current[day] = el as HTMLDivElement)}>
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
