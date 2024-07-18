import { pageStyle } from '@/page/signUp/info/InfoFormPage.style';
import InfoForm from '@/page/signUp/info/component/InfoForm/InfoForm';
import PasswordForm from '@/page/signUp/info/component/PasswordForm/PasswordForm';
import { useSignupMutation } from '@/page/signUp/info/hook/useSignupMutation';

import React, { SetStateAction, createContext, useEffect, useState } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';

import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';

import { UserInfo } from '@/shared/api/signup/info/type';

type Context = {
  userInfo: UserInfo;
  onRegister: React.Dispatch<SetStateAction<UserInfo>>;
};

export const SignUpContext = createContext<Context | undefined>(undefined);

const InfoFormPage = () => {
  const [info, setInfo] = useState<UserInfo>({
    name: '',
    birth: '',
    univ: '',
    email: '',
    password: '',
    passwordChecker: '',
  });
  const [isCompleted, setIsCompleted] = useState(false);

  const { mutate } = useSignupMutation();
  const navigate = useNavigate();

  const isInfoMatched = useMatch('/signup/info');
  const isPasswordMatched = useMatch('/signup/info/password');

  const goToLoginPage = () => {
    navigate('/login');
  };
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (isCompleted) {
      mutate(info, {
        onSuccess: goToLoginPage,
      });
    }
  }, [isCompleted]);

  return (
    <Flex tag="main" css={pageStyle}>
      <Flex tag="section" styles={{ direction: 'column', gap: '3.2rem', height: '78rem', width: '51.1rem' }}>
        <Heading css={{ padding: '1.6rem 0' }}>회원가입</Heading>

        <SignUpContext.Provider value={{ userInfo: info, onRegister: setInfo }}>
          {isInfoMatched && <InfoForm />}

          {isPasswordMatched && <PasswordForm onComplete={() => setIsCompleted(true)} />}
        </SignUpContext.Provider>
      </Flex>
    </Flex>
  );
};

export default InfoFormPage;
