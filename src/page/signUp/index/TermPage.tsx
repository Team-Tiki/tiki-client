import { buttonStyle, detailStyle } from '@/page/signUp/index/TermPage.style';
import TermArea from '@/page/signUp/index/component/TermArea/TermArea';
import TermsAgreeButton from '@/page/signUp/index/component/TermsAgreeButton/TermsAgreeButton';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';

const TermPage = () => {
  const [totalAgreeClicked, setTotalAgreeClicked] = useState(false);
  const [termStatus, setTermStatus] = useState({ serviceTerm: false, privatePolicy: false, collectionAgree: false });

  const navigate = useNavigate();

  const isConfirmed = Object.values(termStatus).every((item) => item === true);

  const 약관전체동의클릭 = () => {
    setTotalAgreeClicked((prev) => !prev);

    setTermStatus({
      serviceTerm: totalAgreeClicked ? false : true,
      privatePolicy: totalAgreeClicked ? false : true,
      collectionAgree: totalAgreeClicked ? false : true,
    });
  };

  const handleNextStep = () => {
    navigate('info');
  };

  return (
    <Flex styles={{ direction: 'column', align: 'center', justify: 'center', height: '100vh' }}>
      <Flex tag="section" styles={{ direction: 'column', width: '51.1rem', gap: '3.2rem' }}>
        <Heading tag="H3" css={{ padding: '1.6rem 0' }}>
          이용 약관 동의
        </Heading>
        <TermsAgreeButton isClicked={totalAgreeClicked} onClick={약관전체동의클릭} />

        <Flex styles={{ direction: 'column', gap: '3.2rem', marginTop: '1.6rem' }}>
          <TermArea
            term="이용 약관"
            onClick={() => setTermStatus((prev) => ({ ...prev, serviceTerm: !prev.serviceTerm }))}
            isChecked={termStatus.serviceTerm}>
            <Text tag="body5" css={detailStyle}>
              이용약관 내용입력 이용약관 내용입력 이용약관 내용입력 이용약관 내용이용약관 내용입력 이용약관 내용입력
              입력 이용약관 내용입력 이용약관 내용입력 이용약관 내용입력 이용약관 내용입력 이용약관 내용입력 이용약관
              내용입력 이용약관 내용이용약관 내용입력 이용약관 내용입력 이용약관 내용입력 이용약관 내용입력
            </Text>
          </TermArea>

          <TermArea
            term="개인정보 처리방침"
            onClick={() => setTermStatus((prev) => ({ ...prev, privatePolicy: !prev.privatePolicy }))}
            isChecked={termStatus.privatePolicy}>
            <Text tag="body5" css={detailStyle}>
              이용약관 내용입력 이용약관 내용입력 이용약관 내용입력 이용약관 내용이용약관 내용입력 이용약관 내용입력
              이용약관 내용입력 이용약관 내용입력
            </Text>
          </TermArea>

          <TermArea
            term="개인정보 수집 및 이용"
            onClick={() => setTermStatus((prev) => ({ ...prev, collectionAgree: !prev.collectionAgree }))}
            isChecked={termStatus.collectionAgree}
            isRequired={false}>
            <Text tag="body4" css={{ fontWeight: 400, marginLeft: '3.2rem' }}>
              이벤트 혜택 정보 수신
            </Text>
          </TermArea>
        </Flex>
        <Button disabled={!isConfirmed} onClick={handleNextStep} css={buttonStyle} variant="primary" size="large">
          다음
        </Button>
      </Flex>
    </Flex>
  );
};

export default TermPage;
