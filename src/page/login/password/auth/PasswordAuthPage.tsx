import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Input from '@/common/component/Input/Input';
import SupportingText from '@/common/component/SupportingText/SupportingText';
import { useInput } from '@/common/hook/useInput';
import { useTimer } from '@/common/hook/useTimer';

import { formStyle, pageStyle, timestyle } from '@/page/login/password/auth/PasswordAuthPage.style';
import { useResendMailMutation } from '@/page/login/password/auth/hook/api/useResendMailMutation';
import { useSupportingText } from '@/page/login/password/auth/hook/common/useSupportingText';
import { formatTime } from '@/page/signUp/info/util/formatTime';

import { EMAIL_REMAIN_TIME, PLACEHOLDER, SUPPORTING_TEXT } from '@/shared/constant/form';
import { PATH } from '@/shared/constant/path';
import { useVerifyCodeMutation } from '@/shared/hook/api/useVerifyCodeMutation';
import { validateCode, validateEmail } from '@/shared/util/validate';

const PasswordAuthPage = () => {
  const [isVerifyCode, setIsVerifyCode] = useState(false);
  const { value: email, onChange: onEmailChange } = useInput('');
  const { value: authCode, onChange: onAuthCodeChange } = useInput('');

  const {
    remainTime,
    isTriggered: isMailSent,
    trigger: handleSend,
    reset: handleResetTimer,
  } = useTimer(EMAIL_REMAIN_TIME, SUPPORTING_TEXT.EMAIL_EXPIRED);

  const navigate = useNavigate();
  const { resendMailMutation } = useResendMailMutation(email);

  const { mutate, isError } = useVerifyCodeMutation(email, authCode);

  const { emailSupportingText, setEmailSupportingText, codeSupportingText, setCodeSupportingText } =
    useSupportingText();

  const handleMailSend = () => {
    resendMailMutation.mutate(undefined, {
      onError: () => {
        setEmailSupportingText({ text: SUPPORTING_TEXT.EMAIL_INVALID, type: 'error' });
      },
    });

    handleSend();
    handleResetTimer();

    setEmailSupportingText({ text: SUPPORTING_TEXT.EMAIL_SUCCESS, type: 'success' });
  };

  const handleVerifyCode = useCallback(() => {
    if (validateCode(authCode)) {
      mutate(undefined, {
        onSuccess: () => {
          setIsVerifyCode(true);
          setCodeSupportingText({ text: SUPPORTING_TEXT.AUTHCODE_SUCCESS, type: 'success' });
        },
        onError: () => {
          setCodeSupportingText({ text: SUPPORTING_TEXT.AUTHCODE_NO_EQUAL, type: 'error' });
        },
      });
      setIsVerifyCode(false);
    }
  }, [authCode, mutate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isError || isMailSent) navigate(PATH.PASSWORD_RESET, { state: email });
  };

  return (
    <Flex style={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Flex tag="section" css={pageStyle}>
        <Heading tag="H4" css={{ fontWeight: 600, padding: '1.6rem 0', alignItems: 'start' }}>
          비밀번호 재설정
        </Heading>
        <form css={[formStyle, { width: '39rem', height: '78rem' }]} onSubmit={handleSubmit}>
          <Flex styles={{ direction: 'column', width: '100%', gap: '0.2rem', justify: 'space-between' }}>
            <Flex styles={{ align: 'end', width: '100%', gap: '0.4rem' }}>
              <Input placeholder={PLACEHOLDER.SCHOOL_EMAIL} value={email} onChange={onEmailChange} />
              <Button
                css={{ width: '9.7rem' }}
                variant="outline"
                size="large"
                onClick={handleMailSend}
                disabled={!validateEmail(email)}>
                인증 메일 전송
              </Button>
            </Flex>
            {isMailSent && !resendMailMutation.isError ? (
              <>
                <SupportingText
                  isSuccess={emailSupportingText.type === 'success'}
                  isError={emailSupportingText.type === 'error'}>
                  {emailSupportingText.text}
                </SupportingText>
                <Flex
                  styles={{
                    align: 'end',
                    justify: 'space-between',
                    width: '100%',
                    marginTop: '0.4rem',
                    gap: '0.4rem',
                  }}>
                  <Input
                    placeholder={PLACEHOLDER.AUTH_CODE}
                    value={authCode}
                    onChange={onAuthCodeChange}
                    css={{ position: 'relative' }}
                  />
                  <span css={timestyle}>{formatTime(remainTime)}</span>
                  <Button
                    css={{ width: '9.7rem', flexShrink: '0' }}
                    size="large"
                    variant="outline"
                    onClick={handleVerifyCode}
                    disabled={!validateCode(authCode)}>
                    인증하기
                  </Button>
                </Flex>
                <SupportingText
                  isSuccess={codeSupportingText.type === 'success'}
                  isError={codeSupportingText.type === 'error'}>
                  {codeSupportingText.text}
                </SupportingText>
              </>
            ) : (
              <SupportingText isError={emailSupportingText.type === 'error'}>{emailSupportingText.text}</SupportingText>
            )}
          </Flex>
          <Button type="submit" variant="primary" size="xLarge" css={{ width: '100%' }} disabled={!isVerifyCode}>
            완료
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default PasswordAuthPage;
