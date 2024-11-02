import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';

import { contentBoxStyle, listItemStyle, scrollStyle } from '@/page/entree/EntreePage.style';
import ListItem from '@/page/entree/component/ListItem/ListItem';
import { Notes } from '@/page/entree/constant/notes';

import ContentBox from '@/shared/component/ContentBox/ContentBox';
import FileGrid from '@/shared/component/FileGrid/FileGrid';

import { FileData } from '@/mock/data/drive';

const EntreePage = () => {
  return (
    <Flex styles={{ gap: '2.4rem' }}>
      <Flex styles={{ direction: 'column', gap: '2.4rem', width: '65%' }}>
        <ContentBox
          variant={'file'}
          title={'파일'}
          headerOption={<Button variant="outline">전체보기</Button>}
          css={[{ height: '21.6rem' }, contentBoxStyle]}>
          <Flex
            css={[
              {
                gap: '1.4rem',
                padding: '0 0 0.7rem',
                overflowX: 'scroll',
              },
              scrollStyle,
            ]}>
            {FileData.map((file) => {
              return <FileGrid title={file.title} type={file.type} volume={file.volume} isSmall={true} />;
            })}
          </Flex>
        </ContentBox>
        <ContentBox
          variant={'timeline'}
          title={'타임라인'}
          headerOption={<Button variant="outline">전체보기</Button>}
          css={[{ height: '40rem' }, contentBoxStyle]}>
          <FileGrid title={'파일 파일'} type={'pdf'} volume={20} isSmall={true} />
        </ContentBox>
      </Flex>
      <ContentBox
        variant={'handover'}
        title={'인수인계 노트'}
        headerOption={<Button variant="outline">전체보기</Button>}
        css={[{ paddingRight: '1rem', height: '64rem' }, contentBoxStyle]}>
        <Flex css={listItemStyle}>
          {Notes.map((note) => {
            return <ListItem title={note.title} content={note.content} date={note.date} tags={note.tags} />;
          })}
        </Flex>
      </ContentBox>
    </Flex>
  );
};

export default EntreePage;
