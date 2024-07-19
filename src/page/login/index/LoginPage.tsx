import { findPasswordButtonStyle, formStyle, pageStyle } from '@/page/login/index/LoginPage.style';
import { useLoginMutation } from '@/page/login/index/hook/useLoginMutation';

import { FormEvent, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import Logo from '@/common/asset/svg/logo_tiki_md.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';

import { PATH } from '@/shared/constant/path';
import useStore from '@/shared/store/auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { mutate } = useLoginMutation();

  const { isLoggedIn } = useStore();

  if (isLoggedIn) return <Navigate to={PATH.SHOWCASE} />;

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({ email, password });
  };

  const 회원가입페이지로이동 = () => {
    navigate('/signup');
  };

  const 비밀번호찾기페이지로이동 = () => {
    navigate('/password/auth');
  };

  return (
    <section css={pageStyle}>
      <Logo width={108} height={40} />
      <form onSubmit={handleLogin} css={formStyle}>
        <Flex styles={{ direction: 'column', gap: '0.8rem', width: '100%' }}>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} variant="underline" placeholder="아이디" />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            variant="underline"
            placeholder="비밀번호"
          />
        </Flex>
        <Flex styles={{ marginTop: '3.6rem', direction: 'column', width: '100%', gap: '1.2rem' }}>
          <Button type="submit" variant="primary">
            로그인
          </Button>
          <Button type="button" variant="secondary" onClick={회원가입페이지로이동}>
            학교 메일로 회원가입
          </Button>
        </Flex>
        <Button
          type="button"
          size="small"
          variant="text"
          css={findPasswordButtonStyle}
          onClick={비밀번호찾기페이지로이동}>
          비밀번호 찾기
        </Button>
      </form>
    </section>
  );
};

export default LoginPage;
