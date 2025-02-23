import { LogoTikiMd } from '@tiki/icon';
import { Button, Flex, Input, useToastAction } from '@tiki/ui';

import { FormEvent, useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { findPasswordButtonStyle, formStyle, pageStyle } from '@/page/login/index/LoginPage.style';
import { useLoginMutation } from '@/page/login/index/hook/useLoginMutation';

import { PATH } from '@/shared/constant/path';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const ref = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const { mutate } = useLoginMutation();
  const { createToast } = useToastAction();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      createToast('이메일을 입력해주세요', 'error');
      return;
    } else if (!password) {
      createToast('비밀번호를 입력해주세요', 'error');
      return;
    }

    mutate({ email, password });
  };

  const 회원가입페이지로이동 = () => {
    navigate(PATH.SIGNUP);
  };

  const 비밀번호찾기페이지로이동 = () => {
    navigate(PATH.PASSWORD_AUTH);
  };

  return (
    <section css={pageStyle}>
      <LogoTikiMd css={{ flexShrink: 0 }} width={108} height={40} />
      <form onSubmit={handleLogin} css={formStyle}>
        <Flex styles={{ direction: 'column', gap: '0.8rem', width: '100%' }}>
          <Input
            ref={useCallback((node: HTMLInputElement | null) => {
              ref.current = node;
              ref.current?.focus();
            }, [])}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="아이디"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="비밀번호"
          />
        </Flex>
        <Flex styles={{ marginTop: '3.6rem', direction: 'column', width: '100%', gap: '1.2rem' }}>
          <Button size="xLarge" css={{ width: '100%' }} type="submit" variant="primary">
            로그인
          </Button>
          <Button
            size="xLarge"
            css={{ width: '100%' }}
            type="button"
            variant="secondary"
            onClick={회원가입페이지로이동}>
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
