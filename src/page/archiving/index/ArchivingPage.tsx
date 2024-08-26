import BlockModal from '@/page/archiving/createTimeBlock/component/Block/BlockModal';
import UploadModal from '@/page/archiving/createTimeBlock/component/Upload/UploadModal';
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
import { useGetTimeBlockQuery } from '@/page/archiving/index/hook/api/useGetTimeBlockQuery';
import { useDate } from '@/page/archiving/index/hook/common/useDate';
import { Block } from '@/page/archiving/index/type/blockType';
import { MonthType } from '@/page/archiving/index/type/monthType';
import { alignBlocks, createTimeBlock } from '@/page/archiving/index/util/block';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Add from '@/common/asset/svg/add_btn.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Modal from '@/common/component/Modal/Modal';
import { useModal, useOutsideClick } from '@/common/hook';
import { theme } from '@/common/style/theme/theme';

const ArchivingPage = () => {
  const [selectedTabId, setSelectedTabId] = useState('total');
  const [selectedBlock, setSelectedBlock] = useState<Block>();

  const daySectionRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  const teamId = new URLSearchParams(location.search).get('teamId');
  if (!teamId) throw new Error('has no error');

  // 블록 생성 모달 관련 코드
  const { isOpen, openModal, closeModal, setCurrentContent, currentContent } = useModal();

  const {
    currentDate,
    currentYear,
    selectedMonthString,
    setSelectedMonthString,
    handlePrevYear,
    handleNextYear,
    endDay,
  } = useDate(daySectionRef);
  const selectedMonth = parseInt(selectedMonthString.split('월')[0]);
  
  const { data } = useGetTimeBlockQuery(+teamId, 'executive', currentYear, selectedMonth);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const timeBlocks: Block[] = data?.timeBlocks || [];
  const blockFloors = useMemo(
    () => alignBlocks(timeBlocks, endDay, selectedMonthString, currentYear),
    [currentYear, endDay, selectedMonthString, timeBlocks]
  );

  const handleClose = () => {
    selectedBlock && setSelectedBlock(undefined);
  };
  
  const sideBarRef = useOutsideClick(handleClose, 'TimeBlock');

  useEffect(() => {
    setSelectedMonthString(`${currentDate.getMonth() + 1}월` as MonthType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teamId]);

  const handleSelectedId = (id: string) => {
    setSelectedTabId(id);
  };

  const handleNext = (blockData: {
    blockName: string;
    blockType: string;
    dates: { startDate: string; endDate: string };
  }) => {
    const type = 'executive';
    setCurrentContent(<UploadModal onClose={closeModal} teamId={+teamId} type={type} blockData={blockData} />);
  };

  const handleMonthClick = (month: MonthType) => {
    console.log('click');
    daySectionRef.current?.scrollTo(0, 0);
    setSelectedMonthString(month);
  };

  const handleBlockClick = (
    e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
    block: Block
  ) => {
    e.stopPropagation();

    e.currentTarget.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'center',
    });

    setSelectedBlock(block);
    setSelectedTabId('selected');
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
                selectedMonth: selectedMonth,
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
          <Button
            variant="action"
            css={buttonStyle(selectedBlock)}
            onClick={() => openModal(<BlockModal onNext={handleNext} />)}>
            <Add width={24} height={24} />
            블록 생성
          </Button>
        </Flex>
      </section>

      <Modal isOpen={isOpen} children={currentContent} onClose={closeModal} />
      <DocumentBar
        selectedBlock={selectedBlock}
        ref={sideBarRef}
        selectedTabId={selectedTabId}
        onSelectId={handleSelectedId}
        onClose={handleClose}
      />
    </Flex>
  );
};

export default ArchivingPage;
