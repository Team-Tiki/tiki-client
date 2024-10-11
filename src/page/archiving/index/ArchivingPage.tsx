import { useRef } from 'react';
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

import MonthHeader from '@/page/archiving/index/component/MonthHeader/MonthHeader';
import TimeBlock from '@/page/archiving/index/component/TimeBlock/TimeBlock';
import YearHeader from '@/page/archiving/index/component/YearHeader/YearHeader';
import { useGetTimeBlockQuery } from '@/page/archiving/index/hook/api/useGetTimeBlockQuery';
import { useDate } from '@/page/archiving/index/hook/common/useDate';
import { useInteractTimeline } from '@/page/archiving/index/hook/common/useInteractTimeline';
import { Block } from '@/page/archiving/index/type/blockType';
import { alignBlocks, createTimeBlock } from '@/page/archiving/index/util/block';
import DocumentBar from '@/page/archiving/index/component/DocumentBar/DocumentBar';

import { useOpenModal } from '@/shared/store/modal';

const ArchivingPage = () => {
  const location = useLocation();

  const daySectionRef = useRef<HTMLDivElement>(null);
  const sideBarRef = useOutsideClick(() => setSelectedBlock(undefined));

  const { selectedBlock, setSelectedBlock, handleBlockClick } = useInteractTimeline();

  const openModal = useOpenModal();

  const teamId = new URLSearchParams(location.search).get('teamId');
  if (!teamId) throw new Error('has no teamId');

  const { currentYear, selectedMonthString, handlePrevYear, handleNextYear, endDay, handleMonthClick } = useDate(
    daySectionRef,
    teamId
  );

  const { data } = useGetTimeBlockQuery(
    +teamId,
    'executive',
    currentYear,
    parseInt(selectedMonthString.split('월')[0])
  );

  const timeBlocks: Block[] = data.timeBlocks;
  const blockFloors = alignBlocks(timeBlocks, endDay, selectedMonthString, currentYear);

  const handleOpenBlockModal = () => {
    openModal('create-block');
  };

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
