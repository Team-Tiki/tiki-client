import { findPasswordButtonStyle, pageStyle } from '@/page/login/LoginPage.style';

import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '@/common/asset/svg/logo_tiki_md.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(email, password);
  };

  const 회원가입페이지로이동 = () => {
    navigate('/signin');
  };

  return (
    <section css={pageStyle}>
      <Logo width={100} height={40} />

      <form onSubmit={handleLogin}>
        <Input onChange={(e) => setEmail(e.target.value)} variant="underline" placeholder="아이디" />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          variant="underline"
          placeholder="비밀번호"
        />
        <Flex styles={{ marginTop: '3.6rem', direction: 'column', width: '100%', gap: '1.2rem' }}>
          <Button type="submit" variant="primary">
            로그인
          </Button>
          <Button type="button" variant="secondary" onClick={회원가입페이지로이동}>
            학교 메일로 회원가입
          </Button>
        </Flex>
        <Button size="small" variant="text" css={findPasswordButtonStyle}>
          비밀번호 찾기
        </Button>
      </form>
    </section>
  );
};

export default LoginPage;
