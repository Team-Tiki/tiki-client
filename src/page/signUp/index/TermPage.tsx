import { buttonStyle, detailStyle } from '@/page/signUp/index/TermPage.style';
import TermArea from '@/page/signUp/index/component/TermArea/TermArea';
import TermsAgreeButton from '@/page/signUp/index/component/TermsAgreeButton/TermsAgreeButton';

import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';
import { scrollStyle } from '@/common/style/theme/scroll';

import { PATH } from '@/shared/constant/path';
import useStore from '@/shared/store/auth';

import { PERSONAL, TERM } from '@/mock/data/term';

const TermPage = () => {
  const [totalAgreeClicked, setTotalAgreeClicked] = useState(false);
  const [requiredTermsStatus, setRequiredTermsStatus] = useState({
    serviceTerm: false,
    privatePolicy: false,
  });
  const [optionalTermsStatus, setOptionalTermsStatus] = useState({ collectionAgree: false });

  const navigate = useNavigate();

  const isConfirmed = Object.values(requiredTermsStatus).every((item) => item === true);

  useEffect(() => {
    if (
      !requiredTermsStatus.serviceTerm ||
      !requiredTermsStatus.privatePolicy ||
      !optionalTermsStatus.collectionAgree
    ) {
      setTotalAgreeClicked(false);
    }
  }, [optionalTermsStatus, requiredTermsStatus, totalAgreeClicked]);

  const { isLoggedIn } = useStore();
  if (isLoggedIn) return <Navigate to={PATH.SHOWCASE} />;

  const 약관전체동의클릭 = () => {
    setTotalAgreeClicked((prev) => !prev);

    setRequiredTermsStatus({
      serviceTerm: totalAgreeClicked ? false : true,
      privatePolicy: totalAgreeClicked ? false : true,
    });

    setOptionalTermsStatus({ collectionAgree: !optionalTermsStatus.collectionAgree });
  };

  const handleNextStep = () => {
    navigate(PATH.SIGNUP_INFO);
  };

  return (
    <Flex tag="main" styles={{ direction: 'column', align: 'center', justify: 'center', height: '100vh' }}>
      <Flex tag="section" styles={{ direction: 'column', width: '51.1rem', gap: '3.2rem' }}>
        <Heading tag="H3" css={{ padding: '1.6rem 0' }}>
          이용 약관 동의
        </Heading>
        <Flex styles={{ direction: 'column', gap: '3.2rem' }}>
          <TermsAgreeButton isClicked={totalAgreeClicked} onClick={약관전체동의클릭} />

          <TermArea
            term="이용 약관"
            onCheck={() => setRequiredTermsStatus((prev) => ({ ...prev, serviceTerm: !prev.serviceTerm }))}
            isChecked={requiredTermsStatus.serviceTerm}>
            <Text tag="body5" css={[detailStyle, scrollStyle]}>
              {TERM}
            </Text>
          </TermArea>

          <TermArea
            term="개인정보 처리방침"
            onCheck={() => setRequiredTermsStatus((prev) => ({ ...prev, privatePolicy: !prev.privatePolicy }))}
            isChecked={requiredTermsStatus.privatePolicy}>
            <Text tag="body5" css={[detailStyle, scrollStyle]}>
              {PERSONAL}
            </Text>
          </TermArea>

          <TermArea
            term="개인정보 수집 및 이용"
            onCheck={() => setOptionalTermsStatus((prev) => ({ ...prev, collectionAgree: !prev.collectionAgree }))}
            isChecked={optionalTermsStatus.collectionAgree}
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
