import { buttonStyle, contentStyle, daySectionStyle, timelineStyle } from '@/page/archiving/index/ArchivingPage.style';
import DaySection from '@/page/archiving/index/component/DaySection/DaySection';
import DocumentBar from '@/page/archiving/index/component/DocumentBar/DocumentBar';
import MonthHeader from '@/page/archiving/index/component/MonthHeader/MonthHeader';
import TimeBlock from '@/page/archiving/index/component/TimeBlock/TimeBlock';
import YearHeader from '@/page/archiving/index/component/YearHeader/YearHeader';
import { useGetTimeBlockQuery } from '@/page/archiving/index/hook/api/useGetTimeBlockQuery';
import { useDate } from '@/page/archiving/index/hook/common/useDate';
import { Block } from '@/page/archiving/index/type/blockType';
import { alignBlocks, getLastDayOfMonth } from '@/page/archiving/index/util/block';

import { useState } from 'react';

import AddIc from '@/common/asset/svg/add_btn.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import { useOutsideClick } from '@/common/hook';
import { theme } from '@/common/style/theme/theme';

import { BlockFlow } from '@/shared/component/ModalFlow/BlockFlow';
import { useModalStore } from '@/shared/store/modal';
import { useTeamStore } from '@/shared/store/team';

const ArchivingPage = () => {
  const [selectedId, setSelectedId] = useState('total');

  const { teamId } = useTeamStore();

  const handleClose = () => {
    selectedBlock && setSelectedBlock(undefined);
  };

  const handleSelectedId = (id: string) => {
    setSelectedId(id);
  };

  const handleBlockClick = (e: React.MouseEvent<HTMLDivElement>, block: Block) => {
    e.stopPropagation();

    const clickedBlock = document.getElementById(String(block.timeBlockId));

    if (clickedBlock) {
      clickedBlock.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'center',
      });
    }

    setSelectedBlock(block);
    setSelectedId('selected');
  };

  const sideBarRef = useOutsideClick(handleClose, 'TimeBlock');

  const { currentDate, currentYear, selectedMonth, setSelectedMonth, handlePrevYear, handleNextYear, endDay } =
    useDate();

  const selectedMonthNumber = parseInt(selectedMonth.split('월')[0]);

  const { data } = useGetTimeBlockQuery(+teamId, 'executive', currentYear, selectedMonthNumber);

  const [selectedBlock, setSelectedBlock] = useState<Block>();
  const timeBlocks: Block[] = data?.timeBlocks || [];
  const blockFloors = alignBlocks(timeBlocks, endDay, selectedMonth, currentYear);

  // 블록 생성 모달 관련 코드
  const openModal = useModalStore((state) => state.openModal);

  const handleOpenBlockModal = () => {
    openModal(<BlockFlow />);
  };

  return (
    <Flex
      styles={{
        justify: 'center',
        align: 'center',
        width: '100%',
        height: '100%',
        paddingLeft: '6rem',
      }}
      css={{ overflowY: 'hidden', overflowX: 'hidden' }}>
      <section css={timelineStyle}>
        <YearHeader handlePrevYear={handlePrevYear} handleNextYear={handleNextYear} currentYear={currentYear} />
        <Flex css={contentStyle}>
          <MonthHeader
            currentMonth={selectedMonth}
            onMonthClick={(month) => setSelectedMonth(month)}
            selectedBlock={selectedBlock}
          />
          <div id="block_area" css={daySectionStyle}>
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
            {timeBlocks.map((block: Block) => {
              let { startDate, endDate } = block;
              const blockStartDate = new Date(startDate);
              const blockEndDate = new Date(endDate);
              const startMonth = blockStartDate.getUTCMonth() + 1;
              const endMonth = blockEndDate.getUTCMonth() + 1;

              const firstDayOfMonth = new Date(Date.UTC(currentYear, selectedMonthNumber - 1, 1));
              const lastDayOfMonth = getLastDayOfMonth(firstDayOfMonth);

              if (blockStartDate.getFullYear() !== currentYear || startMonth !== selectedMonthNumber) {
                startDate = firstDayOfMonth;
              }

              if (blockEndDate.getFullYear() !== currentYear || endMonth !== selectedMonthNumber) {
                endDate = lastDayOfMonth;
              }

              return (
                <TimeBlock
                  id={String(block.timeBlockId)}
                  key={block.timeBlockId}
                  startDate={startDate}
                  endDate={endDate}
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
            <AddIc width={24} height={24} />
            블록 생성
          </Button>
        </Flex>
      </section>

      <DocumentBar
        selectedBlock={selectedBlock}
        ref={sideBarRef}
        selectedId={selectedId}
        onSelectId={handleSelectedId}
        onClickClose={handleClose}
      />
    </Flex>
  );
};

export default ArchivingPage;
