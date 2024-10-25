import { Suspense } from 'react';

import Add from '@/common/asset/svg/ic_add_btn.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import { useOutsideClick } from '@/common/hook';
import { theme } from '@/common/style/theme/theme';

import { buttonStyle, contentStyle, pageStyle, timelineStyle } from '@/page/archiving/index/ArchivingPage.style';
import DocumentBar from '@/page/archiving/index/component/DocumentBar/DocumentBar';
import MonthHeader from '@/page/archiving/index/component/MonthHeader/MonthHeader';
import TimeLine from '@/page/archiving/index/component/TimeLine';
import YearHeader from '@/page/archiving/index/component/YearHeader/YearHeader';
import { useDate } from '@/page/archiving/index/hook/common/useDate';
import { useInteractTimeline } from '@/page/archiving/index/hook/common/useInteractTimeline';

import { headerStyle } from '@/shared/component/Header/Header.style';
import RouteNav from '@/shared/component/RouteNav/RouteNav';
import { useOpenModal } from '@/shared/store/modal';

const ArchivingPage = () => {
  const sideBarRef = useOutsideClick(() => setSelectedBlock(undefined));

  const { selectedBlock, setSelectedBlock, handleBlockClick } = useInteractTimeline();

  const openModal = useOpenModal();

  const teamId = localStorage.getItem('teamId');

  const { ref, currentYear, selectedMonth, handlePrevYear, handleNextYear, endDay, handleMonthClick } = useDate(
    teamId!
  );

  const handleOpenBlockModal = () => {
    openModal('create-block');
  };

  return (
    <Flex css={pageStyle}>
      <section css={timelineStyle}>
        <header css={headerStyle}>
          <Heading tag="H1">TIKI 워크스페이스</Heading>
          <RouteNav />
        </header>
        <YearHeader handlePrevYear={handlePrevYear} handleNextYear={handleNextYear} currentYear={currentYear} />
        <Flex css={contentStyle}>
          <MonthHeader currentMonth={selectedMonth} onMonthClick={handleMonthClick} />
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
          <Button css={buttonStyle(selectedBlock)} onClick={handleOpenBlockModal}>
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
