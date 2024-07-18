import { buttonStyle, contentStyle, daySectionStyle, timelineStyle } from '@/page/archiving/ArchivingPage.style';
import DaySection from '@/page/archiving/component/DaySection/DaySection';
import DocumentBar from '@/page/archiving/component/DocumentBar/DocumentBar';
import MonthHeader from '@/page/archiving/component/MonthHeader/MonthHeader';
import TimeBlock from '@/page/archiving/component/TimeBlock/TimeBlock';
import YearHeader from '@/page/archiving/component/YearHeader/YearHeader';
import { useDate } from '@/page/archiving/hook/common/useDate';
import { Block } from '@/page/archiving/type/blockType';
import { alignBlocks } from '@/page/archiving/util/block';

import { useState } from 'react';

import AddIc from '@/common/asset/svg/add_btn.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import { useOutsideClick } from '@/common/hook';

import { useGetTimeBlockQuery } from '@/shared/hook/archiving/useGetTimeBlockQuery';

const ArchivingPage = () => {
  const [selectedId, setSelectedId] = useState('selected');

  const handleClose = () => {
    blockSelected && setBlockSelected(undefined);
  };

  const handleSelectedId = (Id: string) => {
    setSelectedId(Id);
  };

  const handleBlockClick = (block: Block) => {
    setBlockSelected(block);
    setSelectedId('selected');
  };

  const sideBarRef = useOutsideClick(handleClose, 'TimeBlock');

  const { currentDate, currentYear, selectedMonth, setSelectedMonth, handlePrevYear, handleNextYear, endDay } =
    useDate();
  const [blockSelected, setBlockSelected] = useState<Block>();
  const { data } = useGetTimeBlockQuery(
    Number(9),
    'executive',
    `${currentYear}-${selectedMonth.split('월')[0].padStart(2, '0')}`
  );

  const timeBlocks: Block[] = data?.timeBlocks || [];
  const blockFloors = alignBlocks(timeBlocks, endDay, selectedMonth, currentYear);

  return (
    <Flex
      styles={{ justify: 'center', align: 'center', width: '100%', height: '100vh', paddingLeft: '6rem' }}
      css={{ overflowY: 'hidden', overflowX: 'hidden' }}>
      <section css={timelineStyle(blockSelected)}>
        <YearHeader handlePrevYear={handlePrevYear} handleNextYear={handleNextYear} currentYear={currentYear} />
        <Flex css={contentStyle}>
          <MonthHeader onMonthClick={(month) => setSelectedMonth(month)} />
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
                return (
                  new Date(blocks.startDate).getMonth() + 1 === parseInt(selectedMonth) &&
                  new Date(blocks.startDate).getFullYear() === currentYear
                );
              })
              .map((block: Block) => (
                <TimeBlock
                  key={block.timeBlockId}
                  startDate={block.startDate}
                  endDate={block.endDate}
                  color={block.color}
                  floor={blockFloors[block.timeBlockId] || 1}
                  blockType={block.blockType}
                  onBlockClick={() => handleBlockClick(block)}>
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
      <DocumentBar
        blockSelected={blockSelected}
        ref={sideBarRef}
        selectedId={selectedId}
        handleSelectedId={handleSelectedId}
      />
    </Flex>
  );
};

export default ArchivingPage;
