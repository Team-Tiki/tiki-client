import { Button, Flex, Heading } from '@tiki/ui';

import { useNavigate } from 'react-router-dom';

import TermItem from '@/page/signUp/index/component/TermItem/TermItem';
import TermsAgreeButton from '@/page/signUp/index/component/TermsAgreeButton/TermsAgreeButton';
import { useTermForm } from '@/page/signUp/index/hook/useTermForm';
import { formStyle, pageStyle } from '@/page/signUp/info/InfoFormPage.style';

import { PATH } from '@/shared/constant/path';

const TermPage = () => {
  const { isTotalAgreeClicked, termStatus, isConfirmed, handleAllTermsAgree, handleTermAgree } = useTermForm();

  const navigate = useNavigate();

  const handleNextStep = () => navigate(`${PATH.SIGNUP_INFO}?step=1`);

  return (
    <Flex tag="main" css={pageStyle}>
      <form css={formStyle}>
        <Heading tag="H4">이용 약관 동의</Heading>
        <Flex styles={{ direction: 'column', width: '100%', gap: '1.6rem' }}>
          <TermsAgreeButton isClicked={isTotalAgreeClicked} onClick={handleAllTermsAgree} />

          <TermItem
            term="이용 약관"
            isRequired
            isSelected={termStatus.serviceTerm}
            onSelect={() => handleTermAgree('serviceTerm')}
          />
          <TermItem
            term="개인정보 처리 방침"
            isRequired
            isSelected={termStatus.privatePolicy}
            onSelect={() => handleTermAgree('privatePolicy')}
          />
          <TermItem
            term="개인정보 수집 및 이용"
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
