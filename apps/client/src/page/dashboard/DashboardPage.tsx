import { Button, Flex } from '@tiki/ui';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { contentBoxStyle, handoverBoxStyle } from '@/page/dashboard/DashboardPage.style';
import FileSection from '@/page/dashboard/component/File/FileSection';
import HandoverSection from '@/page/dashboard/component/Handover/HandoverSection';
import TimelineSection from '@/page/dashboard/component/Timeline';
import { useTeamData } from '@/page/workspaceSetting/hook/api/queries';

import ContentBox from '@/shared/component/ContentBox/ContentBox';
import { STORAGE_KEY } from '@/shared/constant/api';
import { PATH } from '@/shared/constant/path';

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    navigate(path);
  };

  const { data } = useTeamData();

  if (!localStorage.getItem(STORAGE_KEY.TEAM_NAME)) {
    localStorage.setItem(STORAGE_KEY.TEAM_NAME, `${data?.data?.teamName}`);
  }

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY.INVITATION_ID)) {
      navigate(`${PATH.INVITE}/${localStorage.getItem(STORAGE_KEY.INVITE_TEAM_ID)}`);
    }
  });

  return (
    <Flex styles={{ gap: '2.4rem' }}>
      <Flex styles={{ direction: 'column', gap: '2.4rem', width: '65%' }}>
        <ContentBox
          variant={'file'}
          title={'파일'}
          headerOption={
            <Button variant="outline" onClick={() => handleNav(PATH.DRIVE)}>
              전체보기
            </Button>
          }
          css={[{ height: '21.6rem' }, contentBoxStyle]}>
          <FileSection />
        </ContentBox>

        <ContentBox
          variant={'timeline'}
          title={'타임라인'}
          headerOption={
            <Button variant="outline" onClick={() => handleNav(PATH.ARCHIVING)}>
              전체보기
            </Button>
          }
          css={[{ height: 'calc(100vh - 36.8rem)', maxHeight: '65vh' }, contentBoxStyle]}>
          <TimelineSection />
        </ContentBox>
      </Flex>

      <ContentBox
        variant={'handover'}
        title={'인수인계 노트'}
        headerOption={
          <Button variant="outline" onClick={() => handleNav(PATH.HANDOVER)}>
            전체보기
          </Button>
        }
        css={[{ height: 'calc(100vh - 12.8rem)' }, handoverBoxStyle, contentBoxStyle]}>
        <HandoverSection />
      </ContentBox>
    </Flex>
  );
};

export default DashboardPage;
