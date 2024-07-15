import {
  buttonStyle,
  contentStyle,
  daySectionStyle,
  pageStyle,
  timelineStyle,
} from '@/page/archiving/ArchivingPage.style';
import DaySection from '@/page/archiving/component/DaySection/DaySection';
import DocumentBar from '@/page/archiving/component/DocumentBar/DocumentBar';
import MonthHeader from '@/page/archiving/component/MonthHeader/MonthHeader';
import TimeBlock from '@/page/archiving/component/TimeBlock/TimeBlock';
import YearHeader from '@/page/archiving/component/YearHeader/YearHeader';
import { useDate } from '@/page/archiving/hook/useDate';
import { Block } from '@/page/archiving/type/blockType';
import { alignBlocks } from '@/page/archiving/util/alignBlocks';
import { getRandomColor } from '@/page/archiving/util/getRandomColor';

import { useState } from 'react';

import AddIc from '@/common/asset/svg/add_btn.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';

import { useGetTimeBlock } from '@/shared/hook/useGetTimeBlock';

const ArchivingPage = () => {
  // const { date } = useParams();
  const { currentDate, currentYear, selectedMonth, setSelectedMonth, handlePrevYear, handleNextYear, endDay } =
    useDate();
  const [blockSelected, setBlockSelected] = useState<Block>();

  const blockFloors = alignBlocks(endDay, selectedMonth, currentYear);
  const { data } = useGetTimeBlock(Number(7));

  return (
    <>
      <section css={timelineStyle(blockSelected)}>
        <div css={pageStyle(blockSelected)}>
          <YearHeader handlePrevYear={handlePrevYear} handleNextYear={handleNextYear} currentYear={currentYear} />
          <Flex css={contentStyle}>
            <MonthHeader onMonthClick={(month) => setSelectedMonth(month)} blockSelected={blockSelected} />
            <div css={daySectionStyle(blockSelected)}>
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
                ?.filter((blocks: Block) => {
                  const blockMonth = blocks.startDate.getMonth() + 1;
                  const clickedMonth = parseInt(selectedMonth.split('월')[0]);

                  return blockMonth === clickedMonth && blocks.startDate.getFullYear() === currentYear;
                })
                .map((block) => (
                  <TimeBlock
                    key={block.timeBlockId}
                    startDate={block.startDate}
                    endDate={block.endDate}
                    color={getRandomColor()}
                    floor={blockFloors[block.timeBlockId] || 1}
                    onBlockClick={() => setBlockSelected(block)}>
                    {block.name}
                  </TimeBlock>
                ))}
            </div>
          </Flex>
        </div>
      </section>
      <Flex styles={{ paddingRight: '2rem', marginLeft: 'auto' }}>
        <Button variant="action" css={buttonStyle(blockSelected)} onClick={() => alert('모달')}>
          <AddIc width={24} height={24} />
          블록 생성
        </Button>
      </Flex>
      {blockSelected && <DocumentBar blockSelected={blockSelected} />}
    </>
  );
};

export default ArchivingPage;
