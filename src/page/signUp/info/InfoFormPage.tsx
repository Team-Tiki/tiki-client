import { pageStyle } from '@/page/signUp/info/InfoFormPage.style';
import InfoForm from '@/page/signUp/info/component/InfoForm/InfoForm';
import PasswordForm from '@/page/signUp/info/component/PasswordForm/PasswordForm';
import { useSignupMutation } from '@/page/signUp/info/hook/api/useSignupMutation';

import { useState } from 'react';
import { useMatch } from 'react-router-dom';

import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';

import { UserInfo } from '@/shared/api/signup/info/type';
import { PATH } from '@/shared/constant/path';

const InfoFormPage = () => {
  const [info, setInfo] = useState<UserInfo>({
    name: '',
    birth: '',
    univ: '',
    email: '',
    password: '',
    passwordChecker: '',
  });

  const { mutate } = useSignupMutation();

  const isInfoMatched = useMatch(PATH.SIGNUP_INFO);
  const isPasswordMatched = useMatch(PATH.SIGNUP_PASSWORD);

  const handleComplete = () => {
    mutate(info);
  };

  return (
    <Flex tag="main" css={pageStyle}>
      <Flex tag="section" styles={{ direction: 'column', gap: '3.2rem', height: '78rem', width: '51.1rem' }}>
        <Heading css={{ padding: '1.6rem 0' }}>회원가입</Heading>

        {isInfoMatched && <InfoForm onInfoChange={setInfo} />}

        {isPasswordMatched && <PasswordForm onInfoChange={setInfo} onComplete={handleComplete} />}
      </Flex>
    </Flex>
  );
};

export default InfoFormPage;
