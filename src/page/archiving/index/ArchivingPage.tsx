import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import Add from '@/common/asset/svg/ic_add_btn.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import { useOutsideClick } from '@/common/hook';
import { theme } from '@/common/style/theme/theme';

import {
  buttonStyle,
  contentStyle,
  daySectionStyle,
  pageStyle,
  timelineStyle,
} from '@/page/archiving/index/ArchivingPage.style';
import DaySection from '@/page/archiving/index/component/DaySection/DaySection';
import DocumentBar from '@/page/archiving/index/component/DocumentBar/DocumentBar';
import MonthHeader from '@/page/archiving/index/component/MonthHeader/MonthHeader';
import TimeBlock from '@/page/archiving/index/component/TimeBlock/TimeBlock';
import YearHeader from '@/page/archiving/index/component/YearHeader/YearHeader';
import { useDate } from '@/page/archiving/index/hook/common/useDate';
import { useFetchBlock } from '@/page/archiving/index/hook/common/useFetchBlock';
import { useInteractTimeline } from '@/page/archiving/index/hook/common/useInteractTimeline';
import { Block } from '@/page/archiving/index/type/blockType';
import { MonthType } from '@/page/archiving/index/type/monthType';
import { createTimeBlock } from '@/page/archiving/index/util/block';

const ArchivingPage = () => {
  const location = useLocation();

  const teamId = new URLSearchParams(location.search).get('teamId');
  if (!teamId) throw new Error('has no teamId');

  const sideBarRef = useOutsideClick(() => setSelectedBlock(undefined));

  const daySectionRef = useRef<HTMLDivElement>(null);

  const {
    currentYear,
    selectedMonthString,
    setSelectedMonthString,
    handlePrevYear,
    handleNextYear,
    endDay,
    handleMonthClick,
  } = useDate(daySectionRef);

  const { selectedBlock, setSelectedBlock, handleOpenBlockModal, handleBlockClick } = useInteractTimeline();

  const { timeBlocks, blockFloors } = useFetchBlock({
    teamId: +teamId,
    currentYear,
    selectedMonth: +selectedMonthString.split('월')[0],
    endDay,
    selectedMonthString,
  });

  useEffect(() => {
    setSelectedMonthString(`${new Date().getMonth() + 1}월` as MonthType);
  }, [teamId]);

  return (
    <Flex css={pageStyle}>
      <section css={timelineStyle}>
        <YearHeader handlePrevYear={handlePrevYear} handleNextYear={handleNextYear} currentYear={currentYear} />
        <Flex css={contentStyle}>
          <MonthHeader
            currentMonth={selectedMonthString}
            onMonthClick={handleMonthClick}
            selectedBlock={selectedBlock}
          />
          <div id="block_area" css={daySectionStyle} ref={daySectionRef}>
            <DaySection endDay={endDay} />

            {timeBlocks.map((block: Block) => {
              const { startDate, endDate } = block;
              const { startDate: blockStartDate, endDate: blockEndDate } = createTimeBlock({
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                currentYear,
                selectedMonth: +selectedMonthString.split('월')[0],
              });

              return (
                <TimeBlock
                  key={block.timeBlockId}
                  startDate={blockStartDate}
                  endDate={blockEndDate}
                  color={block.color}
                  floor={blockFloors[block.timeBlockId] || 1}
                  blockType={block.blockType}
                  isSelected={block.timeBlockId === selectedBlock?.timeBlockId}
                  onBlockClick={(e) => handleBlockClick(e, block)}>
                  {block.name}
                </TimeBlock>
              );
            })}
          </div>
        </Flex>

        <Flex css={{ zIndex: theme.zIndex.overlayTop, marginLeft: 'auto' }}>
          <Button variant="action" css={buttonStyle(selectedBlock)} onClick={handleOpenBlockModal}>
            <Add width={24} height={24} />
            블록 생성
          </Button>
        </Flex>
      </section>
      <DocumentBar selectedBlock={selectedBlock} ref={sideBarRef} onClose={() => setSelectedBlock(undefined)} />
    </Flex>
  );
};

export default ArchivingPage;
