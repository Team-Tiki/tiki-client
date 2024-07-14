import { formStyle, pageStyle, timestyle } from '@/page/login/passwordAuth/PasswordAuthPage.style';
import { PLACEHOLDER, SUPPORTINGTXT } from '@/page/signUp/info/constant';
import { formatTime } from '@/page/signUp/info/util/formatTime';

import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Input from '@/common/component/Input/Input';
import SupportingText from '@/common/component/SupportingText/SupportingText';

const PasswordAuthPage = () => {
  const [isMainSent, setIsMainSent] = useState(false);
  const navigate = useNavigate();
  const [remainTime, setRemainTime] = useState(180);

  const handleMainSend = useCallback(() => {
    setIsMainSent(true);
    setTimeout(() => {
      const timer = setInterval(() => {
        if (remainTime > 0) {
          setRemainTime((prevTime) => prevTime - 1);
        } else {
          clearInterval(timer);
        }
      }, 1000);
      return () => clearInterval(timer);
    });
  }, [remainTime]);

  return (
    <Flex tag="section" css={pageStyle}>
      <Heading css={{ padding: '1.6rem 0', alignItems: 'start' }}>비밀번호 재설정</Heading>
      <form css={formStyle}>
        <Flex styles={{ direction: 'column', width: '100%', gap: '1.6rem' }}>
          <Flex styles={{ align: 'end', justify: 'space-between', width: '100%', gap: '0.8rem' }}>
            <Input variant="underline" label="회원 정보" placeholder={PLACEHOLDER.SCHOOL_EMAIL} />
            <Button css={{ width: '11.1rem' }} size="large" onClick={handleMainSend}>
              인증 메일 발송
            </Button>
          </Flex>
          {isMainSent && (
            <>
              <SupportingText isNotice={true}>{SUPPORTINGTXT.AUTH_CODE}</SupportingText>
              <Flex
                styles={{
                  align: 'end',
                  justify: 'space-between',
                  width: '100%',
                  marginTop: '1.6rem',
                  gap: '1.6rem',
                }}>
                <Input variant="underline" label="회원 정보" placeholder={PLACEHOLDER.SCHOOL_EMAIL} />
                <span css={timestyle}>{formatTime(remainTime)}</span>
                <Button css={{ width: '13rem' }} size="large" onClick={() => {}}>
                  인증하기
                </Button>
              </Flex>
            </>
          )}
        </Flex>
        <Button
          type="button"
          variant="primary"
          size="large"
          css={{ marginTop: 'auto', padding: '1.6rem 23.15rem' }} // 버튼을 하단으로 밀어내기 위한 스타일 조정
          onClick={() => navigate(`/login`)}>
          완료
        </Button>
      </form>
    </Flex>
  );
};

export default PasswordAuthPage;
