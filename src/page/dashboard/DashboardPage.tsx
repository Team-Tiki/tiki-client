import { useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';

import { contentBoxStyle, handoverBoxStyle } from '@/page/dashboard/DashboardPage.style';
import FileSection from '@/page/dashboard/component/File/FileSection';
import HandoverSection from '@/page/dashboard/component/Handover/HandoverSection';
import TimelineSection from '@/page/dashboard/component/Timeline/TimelineSection';

import ContentBox from '@/shared/component/ContentBox/ContentBox';
import { PATH } from '@/shared/constant/path';

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    navigate(path);
  };

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
          css={[{ height: '40rem' }, contentBoxStyle]}>
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
        css={[handoverBoxStyle, contentBoxStyle]}>
        <HandoverSection />
      </ContentBox>
    </Flex>
  );
};

export default DashboardPage;
