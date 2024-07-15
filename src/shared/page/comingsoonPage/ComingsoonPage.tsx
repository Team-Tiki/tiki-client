import { useNavigate } from 'react-router-dom';

import comingsoonImg from '@/common/asset/img/comingsoon.png';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';
import { theme } from '@/common/style/theme/theme';

const ComingsoonPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Flex
      tag="section"
      styles={{
        direction: 'column',
        align: 'center',
        justify: 'space-around',
        height: '100vh',
        gap: '1.2rem',
        padding: '15rem 50.3rem',
      }}>
      <img src={comingsoonImg} alt="comingsoon character" />
      <Heading tag="H3" css={{ fontWeight: '600', whiteSpace: 'nowrap' }}>
        아직 티키가 열심히 준비중이에요
      </Heading>
      <Text tag="body3" css={{ color: theme.colors.gray_700, whiteSpace: 'nowrap' }}>
        더 좋은 서비스를 위해 조금만 기다려주세요!
      </Text>
      <Button variant="action" onClick={handleBack}>
        쇼케이스 페이지로 돌아가기
      </Button>
    </Flex>
  );
};

export default ComingsoonPage;
