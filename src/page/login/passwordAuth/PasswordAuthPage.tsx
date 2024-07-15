import useTimer from '@/page/login/hook/useTimer';
import { formStyle, pageStyle, timestyle } from '@/page/login/passwordAuth/PasswordAuthPage.style';
import { validateInput } from '@/page/login/util/validateInput';
import { PLACEHOLDER, SUPPORTINGTXT } from '@/page/signUp/info/constant';
import { formatTime } from '@/page/signUp/info/util/formatTime';

import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Input from '@/common/component/Input/Input';
import SupportingText from '@/common/component/SupportingText/SupportingText';

import { useSendMailMutation } from '@/shared/hook/useSendMailMutation';

const PasswordAuthPage = () => {
  const [isMainSent, setIsMainSent] = useState(false);
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const { time: remainTime, startTimer, stopTimer } = useTimer(180);
  const mutate = useSendMailMutation(email);

  useEffect(() => {
    const { isEmailValid, isAuthCodeValid } = validateInput({ email, authCode });
    setIsEmailValid(isEmailValid);
    setIsVerified(isAuthCodeValid);
  }, [email, authCode]);

  const handleMailSend = useCallback(() => {
    setIsMainSent(true);
    startTimer();
    mutate();
  }, []);

  const handleVerify = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setAuthCode(value);
    setIsVerified(value.length === 6);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isVerified) {
      stopTimer();
      navigate('/password/reset');
    }
  };

  return (
    <Flex style={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Flex tag="section" css={pageStyle}>
        <Heading css={{ padding: '1.6rem 0', alignItems: 'start' }}>비밀번호 재설정</Heading>
        <form css={[formStyle, { width: '51.1rem', height: '78rem' }]} onSubmit={handleSubmit}>
          <Flex styles={{ direction: 'column', width: '100%', gap: '1.6rem', justify: 'space-between' }}>
            <Flex styles={{ align: 'end', width: '100%', gap: '0.8rem' }}>
              <Input
                variant="underline"
                label="회원 정보"
                placeholder={PLACEHOLDER.SCHOOL_EMAIL}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button css={{ width: '11.1rem' }} size="large" onClick={handleMailSend} disabled={!isEmailValid}>
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
          <Button type="submit" variant="primary" size="large" disabled={!isVerified}>
            완료
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default PasswordAuthPage;
