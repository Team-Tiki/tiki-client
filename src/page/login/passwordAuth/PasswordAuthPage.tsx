import { formStyle, pageStyle, timestyle } from '@/page/login/passwordAuth/PasswordAuthPage.style';
import { PLACEHOLDER, SUPPORTINGTXT } from '@/page/signUp/info/constant';
import { formatTime } from '@/page/signUp/info/util/formatTime';

import { useCallback, useEffect, useState } from 'react';
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
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isEmailValid = email.trim().length > 0 && emailPattern.test(email.trim());
    const isAuthCodeValid = authCode.trim().length > 0 && authCode.trim().length === 6;
    setIsEmailValid(isEmailValid);
    setIsVerified(isAuthCodeValid);
  }, [email, authCode]);

  const MainSend = useCallback(() => {
    setIsMainSent(true);
    setTimeout(() => {
      const timer = setInterval(() => {
        setRemainTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(timer);
            return 0;
          }
        });
      }, 1000);
    });
  }, []);

  const handleVerify = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setAuthCode(value);
    setIsVerified(value.length === 6);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isVerified) {
      navigate('/login');
    }
  };

  return (
    <Flex tag="section" css={pageStyle}>
      <Heading css={{ padding: '1.6rem 0', alignItems: 'start' }}>비밀번호 재설정</Heading>
      <form css={formStyle} onSubmit={handleSubmit}>
        <Flex styles={{ direction: 'column', width: '100%', gap: '1.6rem' }}>
          <Flex styles={{ align: 'end', justify: 'space-between', width: '100%', gap: '0.8rem' }}>
            <Input
              variant="underline"
              label="회원 정보"
              placeholder={PLACEHOLDER.SCHOOL_EMAIL}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button css={{ width: '11.1rem' }} size="large" onClick={MainSend} disabled={!isEmailValid}>
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
                <Input
                  variant="underline"
                  label="인증 코드"
                  placeholder={PLACEHOLDER.AUTH_CODE}
                  value={authCode}
                  onChange={handleVerify}
                />
                <span css={timestyle}>{formatTime(remainTime)}</span>
                <Button css={{ width: '13rem' }} size="large" disabled={!isVerified}>
                  인증하기
                </Button>
              </Flex>
            </>
          )}
        </Flex>
        <Button type="submit" variant="primary" size="large" css={{ marginTop: 'auto' }} disabled={!isVerified}>
          완료
        </Button>
      </form>
    </Flex>
  );
};

export default PasswordAuthPage;
