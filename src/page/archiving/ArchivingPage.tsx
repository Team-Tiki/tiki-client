/** @jsxImportSource @emotion/react */
import { buttonStyle, contentStyle, daySectionStyle, timelineStyle } from '@/page/archiving/ArchivingPage.style';
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
import { useOutsideClick, useOverlay } from '@/common/hook';

const ArchivingPage = () => {
  const { currentDate, currentYear, selectedMonth, setSelectedMonth, handlePrevYear, handleNextYear, endDay } =
    useDate();
  const [blockSelected, setBlockSelected] = useState<BlockType | undefined>();

  const blockFloors = alignBlocks(endDay, selectedMonth, currentYear);

  console.log('docu', blockSelected);
  return (
    <Flex styles={{ width: '100%' }}>
      <section css={timelineStyle(blockSelected)}>
        <YearHeader handlePrevYear={handlePrevYear} handleNextYear={handleNextYear} currentYear={currentYear} />
        <Flex css={contentStyle}>
          <MonthHeader
            onMonthClick={(month: MonthType) => {
              setSelectedMonth(month);
            }}
            blockSelected={blockSelected}
          />
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
                onBlockClick={() => {
                  setBlockSelected(block);
                }}>
                {block.title}
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
      {blockSelected && <DocumentBar blockSelected={blockSelected} />}
    </Flex>
  );
};

export default ArchivingPage;
