import { PLACEHOLDER } from '@/page/signUp/info/constant';
import { pageStyle } from '@/page/signUp/password/PasswordPage.style';

import { useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Input from '@/common/component/Input/Input';

const PasswordPage = () => {
  const navigate = useNavigate();

  return (
    <Flex css={pageStyle}>
      <Flex tag="section" styles={{ direction: 'column', width: '50rem', gap: '3.2rem' }}>
        <Heading css={{ padding: '1.6rem 0' }}>회원가입</Heading>
        <Flex styles={{ direction: 'column', width: '100%', gap: '1.2rem' }}>
          <Input variant="underline" label="비밀번호 설정" placeholder={PLACEHOLDER.PASSWORD} />
          <Input variant="underline" placeholder={PLACEHOLDER.PASSWORD_CONFIRM} />
        </Flex>
        <Button
          type="button"
          variant="primary"
          size="large"
          css={{ marginTop: '46rem' }}
          onClick={() => navigate(`/showcase`)}>
          다음
        </Button>
      </Flex>
    </Flex>
  );
};

export default PasswordPage;
