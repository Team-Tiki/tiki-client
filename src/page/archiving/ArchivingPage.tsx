import { daySectionStyle, sectionStyle } from '@/page/archiving/Archiving.style';
import DaySection from '@/page/archiving/component/DaySection/DaySection';
import MonthHeader from '@/page/archiving/component/MonthHeader/MonthHeader';
import { MonthType } from '@/page/archiving/type/monthType';
import { getMonthDate } from '@/page/archiving/util/getMonth';
import { endOfMonth } from 'date-fns';

import { useState } from 'react';

const ArchivingPage = () => {
  const [selectedMonth, setSelectedMonth] = useState<MonthType>('1월');
  const currentDate = new Date();
  const dateOfMonth = getMonthDate(selectedMonth);
  const endDay = endOfMonth(dateOfMonth);

  return (
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
          return <DaySection key={day} day={day} isClicked={isCurrentMonth && day === currentDate.getDate()} />;
        })}
      </section>
    </section>
  );
};

export default ArchivingPage;
