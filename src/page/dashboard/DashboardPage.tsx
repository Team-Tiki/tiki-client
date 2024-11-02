import { useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';

import ArchivingPage from '@/page/archiving/index/ArchivingPage';
import { contentBoxStyle, fileListStyle, listItemStyle, scrollStyle } from '@/page/dashboard/DashboardPage.style';
import ListItem from '@/page/dashboard/component/ListItem/ListItem';
import { Notes } from '@/page/dashboard/constant/notes';

import ContentBox from '@/shared/component/ContentBox/ContentBox';
import FileGrid from '@/shared/component/FileGrid/FileGrid';
import { PATH } from '@/shared/constant/path';

import { FileData } from '@/mock/data/drive';

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <Flex styles={{ gap: '2.4rem' }}>
      <Flex styles={{ direction: 'column', gap: '2.4rem', width: '65%' }}>
        <ContentBox
          variant={'file'}
          title={'파일'}
          headerOption={
            <Button
              variant="outline"
              onClick={() => {
                navigate(PATH.DRIVE);
              }}>
              전체보기
            </Button>
          }
          css={[{ height: '21.6rem' }, contentBoxStyle]}>
          <Flex css={[fileListStyle, scrollStyle]}>
            {FileData.map((file) => {
              return <FileGrid title={file.title} type={file.type} volume={file.volume} isSmall={true} />;
            })}
          </Flex>
        </ContentBox>

        <section css={{ width: '100%', '& section': { height: '40rem' } }}>
          <ArchivingPage />
        </section>
      </Flex>

      <ContentBox
        variant={'handover'}
        title={'인수인계 노트'}
        headerOption={
          <Button
            variant="outline"
            onClick={() => {
              navigate(PATH.HANDOVER);
            }}>
            전체보기
          </Button>
        }
        css={[{ paddingRight: '1rem', '&>div:last-child': { height: '85%' } }, contentBoxStyle]}>
        <Flex css={listItemStyle}>
          {Notes.map((note) => {
            return <ListItem title={note.title} content={note.content} date={note.date} tags={note.tags} />;
          })}
        </Flex>
      </ContentBox>
    </Flex>
  );
};

export default DashboardPage;
