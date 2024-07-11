import { buttonStyle, contentStyle, daySectionStyle, pageStyle } from '@/page/archiving/ArchivingPage.style';
import DaySection from '@/page/archiving/component/DaySection/DaySection';
import DocumentBar from '@/page/archiving/component/DocumentBar/DocumentBar';
import MonthHeader from '@/page/archiving/component/MonthHeader/MonthHeader';
import TimeBlock from '@/page/archiving/component/TimeBlock/TimeBlock';
import YearHeader from '@/page/archiving/component/YearHeader/YearHeader';
import { TIME_BLOCK } from '@/page/archiving/constant/timeBlock';
import { useDate } from '@/page/archiving/hook/useDate';
import { BlockType } from '@/page/archiving/type/blockType';
import { MonthType } from '@/page/archiving/type/monthType';
import { alignBlocks } from '@/page/archiving/util/alignBlocks';
import { getRandomColor } from '@/page/archiving/util/getRandomColor';

import { useState } from 'react';

import AddIc from '@/common/asset/svg/add_btn.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';

const ArchivingPage = () => {
  const { currentYear, selectedMonth, setSelectedMonth, handlePrevYear, handleNextYear, endDay } = useDate();
  const [clickedDay, setClickedDay] = useState<number | null>(null);
  const [selectedBlock, setSelectedBlock] = useState<BlockType>();

  const blockFloors = alignBlocks(endDay, selectedMonth, currentYear);

  return (
    <>
      <section css={{ padding: '0rem 13.2rem 6.2rem 5.2rem', flexDirection: 'column' }}>
        <div css={pageStyle}>
          <YearHeader handlePrevYear={handlePrevYear} handleNextYear={handleNextYear} currentYear={currentYear} />
          <Flex css={contentStyle}>
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
              {TIME_BLOCK.filter((block) => {
                const blockMonth = block.startDate.getMonth() + 1;
                const clickedMonth = parseInt(selectedMonth.split('월')[0]);

                return blockMonth === clickedMonth && block.startDate.getFullYear() === currentYear;
              }).map((block) => (
                <TimeBlock
                  key={block.id}
                  startDate={block.startDate}
                  endDate={block.endDate}
                  color={getRandomColor()}
                  floor={blockFloors[block.id] || 1}
                  onBlockClick={() => setSelectedBlock(block)}>
                  {block.title}
                </TimeBlock>
              ))}
            </div>
          </Flex>
        </div>
      </section>
      <Flex styles={{ paddingRight: '2rem', marginLeft: 'auto' }}>
        <Button variant="action" css={buttonStyle} onClick={() => alert('모달')}>
          <AddIc width={24} height={24} />
          블록 생성
        </Button>
      </Flex>
      {selectedBlock && <DocumentBar selectedBlock={selectedBlock} />}
    </>
  );
};

export default ArchivingPage;
