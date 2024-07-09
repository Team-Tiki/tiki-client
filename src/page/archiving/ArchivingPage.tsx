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

  return (
    <main css={pageStyle}>
      <section css={sectionStyle}>
        <MonthHeader
          onMonthClick={(month: MonthType) => {
            setSelectedMonth(month);
          }}
        />
        <section css={daySectionStyle}>
          {Array.from({ length: endDay.getDate() }, (_, index) => {
            const day = index + 1;
            const isCurrentMonth = dateOfMonth.getMonth() === currentDate.getMonth();
            const isEven = day % 2 === 0;
            return (
              <DaySection
                key={day}
                day={day}
                isClicked={isCurrentMonth && day === currentDate.getDate()}
                isEven={isEven}
              />
            );
          })}
        </section>
      </section>
    </main>
  );
};

export default ArchivingPage;
