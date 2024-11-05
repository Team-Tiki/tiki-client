import { useMatch, useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';

import { pageStyle } from '@/page/signUp/info/InfoFormPage.style';
import InfoForm from '@/page/signUp/info/component/InfoForm/InfoForm';
import UnivForm from '@/page/signUp/info/component/UnivForm/UnivForm';

import { PATH } from '@/shared/constant/path';

const InfoFormPage = () => {
  const isUnivPage = useMatch(PATH.SIGNUP_UNIV);
  const isInfoPage = useMatch(PATH.SIGNUP_INFO);

  const navigate = useNavigate();

  return (
    <Flex tag="main" css={pageStyle}>
      <Flex tag="section" styles={{ direction: 'column', gap: '6rem', width: '60rem', padding: '6rem 10.5rem' }}>
        <Heading tag="H4">회원가입</Heading>

        <form css={{ width: '100%' }}>
          {isUnivPage && <UnivForm />}
          {isInfoPage && <InfoForm />}
        </form>

        <Button onClick={() => navigate(PATH.SIGNUP_INFO)} size="xLarge" css={{ width: '100%' }}>
          다음
        </Button>
      </Flex>
    </Flex>
  );
};

export default InfoFormPage;
