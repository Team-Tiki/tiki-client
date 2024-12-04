import { Button, Flex, Heading, Text, theme } from '@tiki/ui';

import { useNavigate } from 'react-router-dom';

import errorImg from '@/common/asset/img/error.png';

import { pageStyle, viewStyle } from '@/shared/page/errorPage/ErrorPage.style';

const ComingsoonPage = () => {
  const navigate = useNavigate();

  return (
    <section css={viewStyle}>
      <div css={pageStyle}>
        <img src={errorImg} alt="error character" />
        <Flex styles={{ direction: 'column', align: 'center', gap: '1.2rem' }}>
          <Heading tag="H3" css={{ fontWeight: '600', whiteSpace: 'nowrap' }}>
            아직 티키가 열심히 준비중이에요
          </Heading>
          <Text tag="body3" css={{ color: theme.colors.gray_700, whiteSpace: 'nowrap' }}>
            더 좋은 서비스를 위해 조금만 기다려주세요!
          </Text>
        </Flex>
        <Button onClick={() => navigate(-1)}>쇼케이스 페이지로 돌아가기</Button>
      </div>
    </section>
  );
};

export default ComingsoonPage;
