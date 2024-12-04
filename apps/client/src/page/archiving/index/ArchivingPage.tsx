import { Button, Flex } from '@tiki/ui';

import { Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { contentStyle, pageStyle, timelineStyle } from '@/page/archiving/index/ArchivingPage.style';
import DateProvider from '@/page/archiving/index/DateProvider';
import TimeLine from '@/page/archiving/index/component/TimeLine';
import TimeLineHeader from '@/page/archiving/index/component/TimeLine/TimeLineHeader/TimeLineHeader';
import { useInteractTimeline } from '@/page/archiving/index/hook/common/useInteractTimeline';
import { Block } from '@/page/archiving/index/type/blockType';

import ContentBox from '@/shared/component/ContentBox/ContentBox';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useDrawerAction } from '@/shared/store/drawer';
import { useOpenModal } from '@/shared/store/modal';

const ArchivingPage = () => {
  const { selectedBlock, handleBlockClick } = useInteractTimeline();

  const openModal = useOpenModal();

  const teamId = useInitializeTeamId();

  const location = useLocation();
  const selectedBlockFromDashboard: Block = location.state?.selectedBlock;
  const finalSelectedBlock = selectedBlockFromDashboard || selectedBlock;

  const { openDrawer } = useDrawerAction();

  useEffect(() => {
    if (selectedBlockFromDashboard) {
      /** TODO: 추후 block id에 따른 API 응답으로 데이터 넣기 */
      openDrawer({
        title: selectedBlockFromDashboard.name,
        startDate: new Date('2024-09-13'),
        endDate: new Date('2024-09-24'),
        blockType: 'MEETING',
        color: '#FFE6E8',
        taggedMembers: [],
        handoverNotes: [],
        files: [],
      });
    }
  }, [openDrawer, selectedBlockFromDashboard]);

  const handleOpenBlockModal = () => {
    openModal('create-block');
  };
  return (
    <DateProvider teamId={teamId}>
      <Flex css={pageStyle}>
        <ContentBox
          variant="timeline"
          title="타임라인"
          headerOption={
            <Button variant="secondary" onClick={handleOpenBlockModal}>
              타임블록 추가
            </Button>
          }>
          <section css={timelineStyle}>
            <TimeLineHeader />
            <Flex css={contentStyle}>
              <Suspense>
                {/** fallback UI 디자인 나올 시에 TimeLine 크기만큼 채워서 Layout 안움직이도록 */}
                <TimeLine selectedBlock={finalSelectedBlock} onBlockClick={handleBlockClick} />
              </Suspense>
            </Flex>
          </section>
        </ContentBox>
      </Flex>
    </DateProvider>
  );
};

export default ArchivingPage;
