import { buttonStyle, contentStyle, daySectionStyle, timelineStyle } from '@/page/archiving/ArchivingPage.style';
import DaySection from '@/page/archiving/component/DaySection/DaySection';
import DocumentBar from '@/page/archiving/component/DocumentBar/DocumentBar';
import MonthHeader from '@/page/archiving/component/MonthHeader/MonthHeader';
import TimeBlock from '@/page/archiving/component/TimeBlock/TimeBlock';
import YearHeader from '@/page/archiving/component/YearHeader/YearHeader';
import { useDate } from '@/page/archiving/hook/useDate';
import { Block } from '@/page/archiving/type/blockType';
import { alignBlocks } from '@/page/archiving/util/alignBlocks';

import { useState } from 'react';

import AddIc from '@/common/asset/svg/add_btn.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import { useOutsideClick } from '@/common/hook';

import { useGetTimeBlockQuery } from '@/shared/hook/useGetTimeBlockQuery';

const ArchivingPage = () => {
  const handleClose = () => {
    blockSelected && setBlockSelected(undefined);
  };

  const sideBarRef = useOutsideClick(handleClose, 'TimeBlock');

  const { currentDate, currentYear, selectedMonth, setSelectedMonth, handlePrevYear, handleNextYear, endDay } =
    useDate();
  // const [blockSelected, setBlockSelected] = useState<Block>();
  const [blockSelected, setBlockSelected] = useState<BlockType | undefined>(undefined);

  const blockFloors = alignBlocks(endDay, selectedMonth, currentYear);
  const { data } = useGetTimeBlockQuery(
    Number(7),
    'executive',
    `${currentYear}-${selectedMonth.split('월')[0].padStart(2, '0')}`
  );

  return (
    <Flex styles={{ width: '100%', height: '100vh' }} css={{ overflowY: 'hidden', overflowX: 'hidden' }}>
      <section css={timelineStyle(blockSelected)}>
        <YearHeader handlePrevYear={handlePrevYear} handleNextYear={handleNextYear} currentYear={currentYear} />
        <Flex css={contentStyle}>
          <MonthHeader onMonthClick={(month) => setSelectedMonth(month)} blockSelected={blockSelected} />
          <div css={daySectionStyle}>
            {Array.from({ length: endDay.getDate() }, (_, index) => {
              const day = index + 1;
              const isEven = day % 2 === 0;
              return (
                <DaySection
                  key={day}
                  day={day}
                  isEven={isEven}
                  isToday={
                    day === currentDate.getDate() &&
                    currentYear === currentDate.getFullYear() &&
                    selectedMonth === `${currentDate.getMonth() + 1}월`
                  }
                />
              );
            })}
            {data?.timeBlocks
              .filter((blocks: Block) => {
                const blockStartDate = new Date(blocks.startDate);
                const blockMonth = blockStartDate.getMonth() + 1;
                const clickedMonth = parseInt(selectedMonth.split('월')[0]);

                return blockMonth === clickedMonth && new Date(blocks.startDate).getFullYear() === currentYear;
              })
              .map((block) => (
                <TimeBlock
                  key={block.timeBlockId}
                  startDate={block.startDate}
                  endDate={block.endDate}
                  color={block.color}
                  floor={blockFloors[block.timeBlockId] || 1}
                  onBlockClick={() => {
                    setBlockSelected(block);
                  }}>
                  {block.name}
                </TimeBlock>
              ))}
          </div>
        </Flex>
        <Flex css={{ marginLeft: 'auto' }}>
          <Button variant="action" css={buttonStyle} onClick={() => alert('모달')}>
            <AddIc width={24} height={24} />
            블록 생성
          </Button>
        </Flex>
      </section>
      <DocumentBar blockSelected={blockSelected} ref={sideBarRef} />
    </Flex>
  );
};

export default ArchivingPage;
