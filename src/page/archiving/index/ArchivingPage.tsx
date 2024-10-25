import { Suspense } from 'react';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import { useOutsideClick } from '@/common/hook';

import { contentBoxStyle, contentStyle, pageStyle, timelineStyle } from '@/page/archiving/index/ArchivingPage.style';
import DocumentBar from '@/page/archiving/index/component/DocumentBar/DocumentBar';
import TimeLine from '@/page/archiving/index/component/TimeLine';
import TimeLineHeader from '@/page/archiving/index/component/TimeLine/TimeLineHeader/TimeLineHeader';
import { useDate } from '@/page/archiving/index/hook/common/useDate';
import { useInteractTimeline } from '@/page/archiving/index/hook/common/useInteractTimeline';

import ContentBox from '@/shared/component/ContentBox/ContentBox';
import { useOpenModal } from '@/shared/store/modal';

const ArchivingPage = () => {
  const { selectedBlock, handleBlockClick } = useInteractTimeline();

  const openModal = useOpenModal();

  const teamId = localStorage.getItem('teamId');

  const { ref, currentYear, currentMonth, handlePrevMonth, handleNextMonth, handleToday, endDay } = useDate(teamId!);

  const handleOpenBlockModal = () => {
    openModal('create-block');
  };

  return (
    <Flex css={pageStyle}>
      <ContentBox
        variant="timeline"
        title="타임라인"
        headerOption={
          <Button variant="secondary" onClick={handleOpenBlockModal}>
            타임블록 추가
          </Button>
        }
        css={contentBoxStyle}>
        <section css={timelineStyle}>
          <TimeLineHeader
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
            currentYear={currentYear}
            currentMonth={currentMonth}
            onToday={handleToday}
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
        </section>
      </ContentBox>
    </Flex>
  );
};

export default ArchivingPage;
