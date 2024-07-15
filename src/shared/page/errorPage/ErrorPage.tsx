import { useNavigate } from 'react-router-dom';

import errorImg from '@/common/asset/img/error.png';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';
import { theme } from '@/common/style/theme/theme';

const ErrorPage = () => {
  const navi = useNavigate();
  return (
    <Flex
      tag="section"
      styles={{
        direction: 'column',
        align: 'center',
        justify: 'center',
        height: '100vh',
        gap: '1rem',
        padding: '15rem 50.3rem',
      }}>
      <img src={errorImg} alt="comingsoon character" css={{ marginBottom: '1rem' }} />
      <Heading tag="H3" css={{ fontWeight: '600', whiteSpace: 'nowrap' }}>
        오류가 발생했어요
      </Heading>
      <Text tag="body3" css={{ color: theme.colors.gray_700, whiteSpace: 'nowrap' }}>
        잠시후에 다시 시도해주세요
      </Text>
      <Button
        variant="action"
        onClick={() => {
          navi(-1);
        }}
        css={{ marginTop: '2rem', minWidth: '32rem' }}>
        돌아가기
      </Button>
    </Flex>
  );
};

export default ErrorPage;
