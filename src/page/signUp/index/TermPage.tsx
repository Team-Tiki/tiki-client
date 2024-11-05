import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';

import TermItem from '@/page/signUp/index/component/TermItem/TermItem';
import TermsAgreeButton from '@/page/signUp/index/component/TermsAgreeButton/TermsAgreeButton';
import { pageStyle } from '@/page/signUp/info/InfoFormPage.style';
import { formStyle } from '@/page/signUp/info/component/InfoForm/InfoForm.style';

import { PATH } from '@/shared/constant/path';

import { PERSONAL, TERM } from '@/mock/data/term';

type TermItem = {
  serviceTerm: boolean;
  privatePolicy: boolean;
  personalInfo: boolean;
};

const TermPage = () => {
  const [totalAgreeClicked, setTotalAgreeClicked] = useState(false);
  const [termStatus, setTermStatus] = useState<TermItem>({
    serviceTerm: false,
    privatePolicy: false,
    personalInfo: false,
  });

  const navigate = useNavigate();

  const isConfirmed = termStatus.serviceTerm && termStatus.privatePolicy;

  const 약관전체동의클릭 = () => {
    setTotalAgreeClicked((prev) => !prev);

    setTermStatus({
      serviceTerm: totalAgreeClicked ? false : true,
      privatePolicy: totalAgreeClicked ? false : true,
      personalInfo: totalAgreeClicked ? false : true,
    });
  };

  const handleItemClick = (key: keyof TermItem) => {
    setTermStatus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleNextStep = () => {
    navigate(PATH.SIGNUP_INFO);
  };

  return (
    <Flex tag="main" css={pageStyle}>
      <form css={formStyle}>
        <Heading tag="H4">이용 약관 동의</Heading>
        <Flex styles={{ direction: 'column', width: '100%', gap: '1.6rem' }}>
          <TermsAgreeButton isClicked={totalAgreeClicked} onClick={약관전체동의클릭} />

          <TermItem
            term="이용 약관"
            content={TERM}
            description="티키 서비스 이용약관은 다음과 같은 내용을 담고 있습니다."
            isRequired
            isSelected={termStatus.serviceTerm}
            onSelect={() => handleItemClick('serviceTerm')}
          />
          <TermItem
            term="개인정보 처리 방침"
            content={PERSONAL}
            description="티키 서비스 이용약관은 다음과 같은 내용을 담고 있습니다."
            isRequired
            isSelected={termStatus.privatePolicy}
            onSelect={() => handleItemClick('privatePolicy')}
          />
          <TermItem
            term="개인정보 수집 및 이용"
            content={PERSONAL}
            description="티키 서비스 이용약관은 다음과 같은 내용을 담고 있습니다."
            isSelected={termStatus.personalInfo}
            onSelect={() => handleItemClick('personalInfo')}
          />
        </Flex>
        <Button disabled={!isConfirmed} onClick={handleNextStep} variant="primary" size="large">
          다음
        </Button>
      </form>
    </Flex>
  );
};

export default TermPage;
