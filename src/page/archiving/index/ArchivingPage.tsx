import BlockModal from '@/page/archiving/createTimeBlock/component/Block/BlockModal';
import UploadModal from '@/page/archiving/createTimeBlock/component/Upload/UploadModal';
import { buttonStyle, contentStyle, daySectionStyle, timelineStyle } from '@/page/archiving/index/ArchivingPage.style';
import DaySection from '@/page/archiving/index/component/DaySection/DaySection';
import DocumentBar from '@/page/archiving/index/component/DocumentBar/DocumentBar';
import MonthHeader from '@/page/archiving/index/component/MonthHeader/MonthHeader';
import TimeBlock from '@/page/archiving/index/component/TimeBlock/TimeBlock';
import YearHeader from '@/page/archiving/index/component/YearHeader/YearHeader';
import { useGetTimeBlockQuery } from '@/page/archiving/index/hook/api/useGetTimeBlockQuery';
import { useDate } from '@/page/archiving/index/hook/common/useDate';
import { Block } from '@/page/archiving/index/type/blockType';
import { alignBlocks } from '@/page/archiving/index/util/block';

import { useState } from 'react';

import AddIc from '@/common/asset/svg/add_btn.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Modal from '@/common/component/Modal/Modal';
import { useModal, useOutsideClick } from '@/common/hook';

import { useTeamStore } from '@/shared/store/team';

const ArchivingPage = () => {
  const [selectedId, setSelectedId] = useState('selected');

  const { teamId } = useTeamStore();

  const handleClose = () => {
    blockSelected && setBlockSelected(undefined);
  };

  const handleSelectedId = (id: string) => {
    setSelectedId(id);
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
    Number(teamId),
    'executive',
    `${currentYear}-${selectedMonth.split('월')[0].padStart(2, '0')}`
  );

  const timeBlocks: Block[] = data?.timeBlocks || [];
  const blockFloors = alignBlocks(timeBlocks, endDay, selectedMonth, currentYear);

  // 블록 생성 모달 관련 코드
  const { isOpen, openModal, closeModal, setCurrentContent, currentContent } = useModal();

  const handleNext = (blockData: {
    blockName: string;
    blockType: string;
    dates: { startDate: string; endDate: string };
  }) => {
    const type = 'executive';
    setCurrentContent(<UploadModal onClose={closeModal} teamId={+teamId} type={type} blockData={blockData} />);
  };

  return (
    <Flex
      styles={{ justify: 'center', align: 'center', width: '100%', height: '100vh', paddingLeft: '6rem' }}
      css={{ overflowY: 'hidden', overflowX: 'hidden' }}>
      <section css={timelineStyle}>
        <YearHeader handlePrevYear={handlePrevYear} handleNextYear={handleNextYear} currentYear={currentYear} />
        <Flex css={contentStyle}>
          <MonthHeader onMonthClick={(month) => setSelectedMonth(month)} blockSelected={blockSelected} />
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
                  onSelected={block.timeBlockId === blockSelected?.timeBlockId}
                  onBlockClick={() => handleBlockClick(block)}>
                  {block.name}
                </TimeBlock>
              ))}
          </div>
        </Flex>
        <Flex css={{ marginLeft: 'auto' }}>
          <Button variant="action" css={buttonStyle} onClick={() => openModal(<BlockModal onNext={handleNext} />)}>
            <AddIc width={24} height={24} />
            블록 생성
          </Button>
        </Flex>
      </section>
      <Modal isOpen={isOpen} children={currentContent} onClose={closeModal} />
      <DocumentBar
        blockSelected={blockSelected}
        ref={sideBarRef}
        selectedId={selectedId}
        onSelectId={handleSelectedId}
        onClickClose={handleClose}
      />
    </Flex>
  );
};

export default ArchivingPage;
