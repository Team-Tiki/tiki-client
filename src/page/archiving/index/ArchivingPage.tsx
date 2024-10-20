import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import { useOutsideClick } from '@/common/hook';
import { theme } from '@/common/style/theme/theme';

import { contentBoxStyle, contentStyle, pageStyle, timelineStyle } from '@/page/archiving/index/ArchivingPage.style';
import DocumentBar from '@/page/archiving/index/component/DocumentBar/DocumentBar';
import TimeLine from '@/page/archiving/index/component/TimeLine';
import TimeLineHeader from '@/page/archiving/index/component/TimeLine/TimeLineHeader/TimeLineHeader';
import { useDate } from '@/page/archiving/index/hook/common/useDate';
import { useInteractTimeline } from '@/page/archiving/index/hook/common/useInteractTimeline';

import ContentBox from '@/shared/component/ContentBox/ContentBox';
import { useOpenModal } from '@/shared/store/modal';

const ArchivingPage = () => {
  const location = useLocation();

  const sideBarRef = useOutsideClick(() => setSelectedBlock(undefined));

  const { selectedBlock, setSelectedBlock, handleBlockClick } = useInteractTimeline();

  const openModal = useOpenModal();

  const teamId = new URLSearchParams(location.search).get('teamId');

  if (!teamId) throw new Error('has no teamId');

  const { ref, currentYear, currentMonth, handlePrevMonth, handleNextMonth, endDay } = useDate(teamId);

  const handleOpenBlockModal = () => {
    openModal('create-block');
  };

  return (
    <Flex css={pageStyle}>
      <ContentBox
        variant="timeline"
        title="타임라인"
        headerOption={
          <Button variant="secondary" size="small" onClick={handleOpenBlockModal}>
            블록 생성
          </Button>
        }
        css={contentBoxStyle}>
        <section css={timelineStyle}>
          <TimeLineHeader
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
            currentYear={currentYear}
            currentMonth={currentMonth}
          />
          <Flex css={contentStyle}>
            <Suspense>
              {/** fallback UI 디자인 나올 시에 TimeLine 크기만큼 채워서 Layout 안움직이도록 */}
              <TimeLine
                ref={ref}
                selectedBlock={selectedBlock}
                onBlockClick={handleBlockClick}
                currentYear={currentYear}
                currentMonth={currentMonth}
                endDay={endDay}
              />
            </Suspense>
          </Flex>

          <Flex css={{ zIndex: theme.zIndex.overlayTop, marginLeft: 'auto' }}></Flex>
        </section>
      </ContentBox>
      <DocumentBar selectedBlock={selectedBlock} ref={sideBarRef} onClose={() => setSelectedBlock(undefined)} />
    </Flex>
  );
};

export default ArchivingPage;
