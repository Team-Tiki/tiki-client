import { useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';

import TermItem from '@/page/signUp/index/component/TermItem/TermItem';
import TermsAgreeButton from '@/page/signUp/index/component/TermsAgreeButton/TermsAgreeButton';
import { useTermForm } from '@/page/signUp/index/hook/useTermForm';
import { pageStyle } from '@/page/signUp/info/InfoFormPage.style';
import { formStyle } from '@/page/signUp/info/component/InfoForm/InfoForm.style';

import { PATH } from '@/shared/constant/path';

import { PERSONAL, TERM } from '@/mock/data/term';

const TermPage = () => {
  const { totalAgreeClicked, termStatus, isConfirmed, handleAllTermsAgree, handleTermAgree } = useTermForm();

  const navigate = useNavigate();

  const handleNextStep = () => navigate(PATH.SIGNUP_UNIV);

  return (
    <Flex tag="main" css={pageStyle}>
      <form css={formStyle}>
        <Heading tag="H4">이용 약관 동의</Heading>
        <Flex styles={{ direction: 'column', width: '100%', gap: '1.6rem' }}>
          <TermsAgreeButton isClicked={totalAgreeClicked} onClick={handleAllTermsAgree} />

          <TermItem
            term="이용 약관"
            content={TERM}
            description="티키 서비스 이용약관은 다음과 같은 내용을 담고 있습니다."
            isRequired
            isSelected={termStatus.serviceTerm}
            onSelect={() => handleTermAgree('serviceTerm')}
          />
          <TermItem
            term="개인정보 처리 방침"
            content={PERSONAL}
            description="티키 서비스 이용약관은 다음과 같은 내용을 담고 있습니다."
            isRequired
            isSelected={termStatus.privatePolicy}
            onSelect={() => handleTermAgree('privatePolicy')}
          />
          <TermItem
            term="개인정보 수집 및 이용"
            content={PERSONAL}
            description="티키 서비스 이용약관은 다음과 같은 내용을 담고 있습니다."
            isSelected={termStatus.personalInfo}
            onSelect={() => handleTermAgree('personalInfo')}
          />
        </Flex>
        <Button disabled={!isConfirmed} onClick={handleNextStep} variant="primary" size="xLarge">
          다음
        </Button>
      </form>
    </Flex>
  );
};

export default TermPage;
