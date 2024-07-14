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
    <Flex tag="main" css={pageStyle}>
      <Flex tag="section" styles={{ direction: 'column', gap: '3.2rem', height: '78rem', width: '51.1rem' }}>
        <Heading css={{ padding: '1.6rem 0' }}>회원가입</Heading>
        <form onSubmit={handleSignUp} css={formStyle}>
          <Flex styles={{ direction: 'column', width: '100%', gap: '1.2rem', grow: '1' }}>
            <Input variant="underline" label="비밀번호 설정" placeholder={PLACEHOLDER.PASSWORD} />
            <Input variant="underline" placeholder={PLACEHOLDER.PASSWORD_CONFIRM} />
          </Flex>
          <Button variant="primary" size="large" onClick={() => navigate(`/showcase`)}>
            다음
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default PasswordPage;
