import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

import Add from '@/common/asset/svg/ic_add_btn.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import { useOutsideClick } from '@/common/hook';
import { theme } from '@/common/style/theme/theme';

import { buttonStyle, contentStyle, pageStyle, timelineStyle } from '@/page/archiving/index/ArchivingPage.style';
import DocumentBar from '@/page/archiving/index/component/DocumentBar/DocumentBar';
import MonthHeader from '@/page/archiving/index/component/MonthHeader/MonthHeader';
import TimeLine from '@/page/archiving/index/component/TimeLine';
import YearHeader from '@/page/archiving/index/component/YearHeader/YearHeader';
import { useDate } from '@/page/archiving/index/hook/common/useDate';
import { useInteractTimeline } from '@/page/archiving/index/hook/common/useInteractTimeline';

import { useOpenModal } from '@/shared/store/modal';

const ArchivingPage = () => {
  const location = useLocation();

  const sideBarRef = useOutsideClick(() => setSelectedBlock(undefined));

  const { selectedBlock, setSelectedBlock, handleBlockClick } = useInteractTimeline();

  const openModal = useOpenModal();

  const teamId = new URLSearchParams(location.search).get('teamId');

  if (!teamId) throw new Error('has no teamId');

  const { ref, currentYear, selectedMonth, handlePrevYear, handleNextYear, endDay, handleMonthClick } = useDate(teamId);

  const handleOpenBlockModal = () => {
    openModal('create-block');
  };

  return (
    <Flex css={pageStyle}>
      <section css={timelineStyle}>
        <YearHeader handlePrevYear={handlePrevYear} handleNextYear={handleNextYear} currentYear={currentYear} />
        <Flex css={contentStyle}>
          <MonthHeader currentMonth={selectedMonth} onMonthClick={handleMonthClick} selectedBlock={selectedBlock} />
          <Suspense>
            {/** fallback UI 디자인 나올 시에 TimeLine 크기만큼 채워서 Layout 안움직이도록 */}
            <TimeLine
              ref={ref}
              selectedBlock={selectedBlock}
              onBlockClick={handleBlockClick}
              currentYear={currentYear}
              selectedMonth={selectedMonth}
              endDay={endDay}
            />
          </Suspense>
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
