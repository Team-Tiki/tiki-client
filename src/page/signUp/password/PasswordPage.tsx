import { PLACEHOLDER } from '@/page/signUp/info/constant';
import { formStyle, pageStyle } from '@/page/signUp/password/PasswordPage.style';

import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Input from '@/common/component/Input/Input';

const PasswordPage = () => {
  const navigate = useNavigate();

  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Flex css={pageStyle}>
      <form onSubmit={handleSignUp} css={formStyle}>
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
      </form>
    </Flex>
  );
};

export default PasswordPage;
