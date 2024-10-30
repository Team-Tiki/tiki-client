import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';

import { scrollStyle } from '@/page/entree/EntreePage.style';

import ContentBox from '@/shared/component/ContentBox/ContentBox';
import FileGrid from '@/shared/component/FileGrid/FileGrid';

const EntreePage = () => {
  return (
    <Flex styles={{ gap: '2.4rem' }}>
      <Flex styles={{ direction: 'column', gap: '2.4rem', width: '65%' }}>
        <ContentBox
          variant={'file'}
          title={'파일'}
          headerOption={<Button variant="outline">전체보기</Button>}
          css={{
            height: '21.6rem',
            '& > header': { height: '6.1rem' },
            '& > div': { marginTop: '0' },
          }}>
          <Flex
            css={[
              {
                gap: '1.4rem',
                padding: '0 0 0.7rem',
                overflowX: 'scroll',
              },
              scrollStyle,
            ]}>
            <FileGrid title={'뽀우니'} type={'pdf'} volume={20} isSmall={true} />
            <FileGrid title={'Bonnie'} type={'word'} volume={20} isSmall={true} />
          </Flex>
        </ContentBox>
        <ContentBox
          variant={'timeline'}
          title={'타임라인'}
          headerOption={<Button variant="outline">전체보기</Button>}
          css={{ height: '40rem', '& > header': { height: '6.4rem' } }}>
          <FileGrid title={'파일 파일'} type={'pdf'} volume={20} isSmall={true} />
        </ContentBox>
      </Flex>
      <ContentBox
        variant={'handover'}
        title={'인수인계 노트'}
        headerOption={<Button variant="outline">전체보기</Button>}>
        <FileGrid title={'파일 파일'} type={'pdf'} volume={20} isSmall={true} />
      </ContentBox>
    </Flex>
  );
};

export default EntreePage;
