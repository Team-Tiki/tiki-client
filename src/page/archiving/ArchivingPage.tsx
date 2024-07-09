import { daySectionStyle, pageStyle, sectionStyle } from '@/page/archiving/Archiving.style';
import DaySection from '@/page/archiving/component/DaySection/DaySection';
import MonthHeader from '@/page/archiving/component/MonthHeader/MonthHeader';
import { MonthType } from '@/page/archiving/type/monthType';
import { getMonthDate } from '@/page/archiving/util/getMonthDate';
import { endOfMonth } from 'date-fns';

import { useState } from 'react';

const ArchivingPage = () => {
  const currentDate = new Date();
  const [selectedMonth, setSelectedMonth] = useState<MonthType>(`${currentDate.getMonth() + 1}월` as MonthType);
  const dateOfMonth = getMonthDate(selectedMonth);
  const endDay = endOfMonth(dateOfMonth);
  const [clickedDay, setClickedDay] = useState<number | null>(null);

  return (
    <div css={pageStyle}>
      <section css={sectionStyle}>
        <MonthHeader
          onMonthClick={(month: MonthType) => {
            setSelectedMonth(month);
            setClickedDay(null);
          }}
        />
        <div css={daySectionStyle}>
          {Array.from({ length: endDay.getDate() }, (_, index) => {
            const day = index + 1;
            const isEven = day % 2 === 0;
            const isClicked = clickedDay === day;
            return (
              <DaySection
                key={day}
                day={day}
                isClicked={isClicked}
                isEven={isEven}
                onDayClick={() => setClickedDay(day)}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ArchivingPage;
