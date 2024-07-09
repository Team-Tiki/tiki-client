import {
  buttonStyle,
  daySectionStyle,
  headerStyle,
  iconStyle,
  pageStyle,
  sectionStyle,
} from '@/page/archiving/ArchivingPage.style';
import DaySection from '@/page/archiving/component/DaySection/DaySection';
import MonthHeader from '@/page/archiving/component/MonthHeader/MonthHeader';
import TimeBlock from '@/page/archiving/component/TimeBlock/TimeBlock';
import { TIME_BLOCK } from '@/page/archiving/constant/timeBlock';
import { MonthType } from '@/page/archiving/type/monthType';
import { getMonthDate } from '@/page/archiving/util/getMonthDate';
import { getRandomColor } from '@/page/archiving/util/getRandomColor';
import { endOfMonth } from 'date-fns';

import { useState } from 'react';

import AddIc from '@/common/asset/svg/add_btn.svg?react';
import PreviousYearArrow from '@/common/asset/svg/arrow_left.svg?react';
import NextYearArrow from '@/common/asset/svg/arrow_right.svg?react';
import Calendar from '@/common/asset/svg/calendar.svg?react';
import Button from '@/common/component/Button/Button';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';

const ArchivingPage = () => {
  const currentDate = new Date();

  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<MonthType>(`${currentDate.getMonth() + 1}월` as MonthType);
  const [clickedDay, setClickedDay] = useState<number | null>(null);

  const dateOfMonth = getMonthDate(selectedMonth, currentYear);
  const endDay = endOfMonth(dateOfMonth);

  return (
    <div css={pageStyle}>
      <header css={headerStyle}>
        <Heading tag="H4" css={{ marginRight: '1.6rem', marginTop: '0.4rem' }}>
          타임라인
        </Heading>
        <div css={iconStyle}>
          <Calendar width={24} height={24} />
          <PreviousYearArrow
            width={16}
            height={16}
            onClick={() => setCurrentYear(currentYear - 1)}
            css={{ cursor: 'pointer' }}
          />
          <Text tag="body1" css={{ marginTop: '0.4rem' }}>
            {currentYear}
          </Text>
          <NextYearArrow
            width={16}
            height={16}
            onClick={() => setCurrentYear(currentYear + 1)}
            css={{ cursor: 'pointer' }}
          />
        </div>
      </header>
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
          {TIME_BLOCK.map((block) => (
            <TimeBlock key={block.id} startDate={block.startDate} endDate={block.endDate} color={getRandomColor()}>
              {block.name}
            </TimeBlock>
          ))}
        </div>
      </section>
      <Button variant="action" css={buttonStyle} onClick={() => alert('모달')}>
        <AddIc width={24} height={24} />
        블록 생성
      </Button>
    </div>
  );
};

export default ArchivingPage;
