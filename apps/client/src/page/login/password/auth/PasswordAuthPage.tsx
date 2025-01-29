/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Flex, Heading, Input, useToastAction } from '@tiki/ui';
import { useInput, useTimer } from '@tiki/utils';

import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { formStyle, pageStyle, timestyle } from '@/page/login/password/auth/PasswordAuthPage.style';
import { useSupportingText } from '@/page/login/password/auth/hook/common/useSupportingText';
import { formatTime } from '@/page/signUp/info/util/formatTime';

import { $api } from '@/shared/api/client';
import { EMAIL_REMAIN_TIME, PLACEHOLDER, SUPPORTING_TEXT } from '@/shared/constant/form';
import { PATH } from '@/shared/constant/path';
import { validateCode, validateEmail } from '@/shared/util/validate';

const PasswordAuthPage = () => {
  const [isVerifyCode, setIsVerifyCode] = useState(false);
  const [buttonText, setButtonText] = useState('인증 메일 전송');
  const navigate = useNavigate();

  const { value: email, onChange: onEmailChange } = useInput('');
  const { value: authCode, onChange: onAuthCodeChange } = useInput('');
  const { emailSupportingText, setEmailSupportingText, codeSupportingText, setCodeSupportingText } =
    useSupportingText();

  const { createToast } = useToastAction();

  const {
    remainTime,
    isTriggered: isMailSent,
    handleTrigger: handleSend,
    handleReset: handleResetTimer,
  } = useTimer(EMAIL_REMAIN_TIME, () => alert(SUPPORTING_TEXT.EMAIL_EXPIRED));

  const { mutate: resendMailMutation, isError: isResendMailError } = $api.useMutation(
    'post',
    '/api/v1/email/verification/password'
  );
  const { mutate, isError } = $api.useMutation('post', '/api/v1/email/verification/checking');

  const handleMailSend = () => {
    resendMailMutation(
      { body: { email } },
      {
        onSuccess: () => {
          createToast('메일을 성공적으로 전송했습니다.', 'success');
        },
        onError: (error) => {
          setEmailSupportingText({ text: SUPPORTING_TEXT.EMAIL_INVALID, type: 'error' });

          createToast(`${error.message}`, 'error');
        },
      }
    );

    handleSend();
    handleResetTimer();

    setEmailSupportingText({ text: SUPPORTING_TEXT.EMAIL_SUCCESS, type: 'success' });
    setButtonText('재전송');
  };

  const handleVerifyCode = useCallback(() => {
    if (validateCode(authCode)) {
      mutate(
        { body: { email, code: authCode } },
        {
          onSuccess: () => {
            setIsVerifyCode(true);
            setCodeSupportingText({ text: SUPPORTING_TEXT.AUTHCODE_SUCCESS, type: 'success' });
          },
          onError: () => {
            setCodeSupportingText({ text: SUPPORTING_TEXT.AUTHCODE_NO_EQUAL, type: 'error' });
          },
        }
      );
      setIsVerifyCode(false);
    }
  }, [authCode, mutate, setCodeSupportingText]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isError || isMailSent) navigate(PATH.PASSWORD_RESET, { state: email });
  };

  return (
    <Flex style={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Flex tag="section" css={pageStyle}>
        <Heading tag="H4" css={{ fontWeight: 600, paddingBottom: '6rem', alignItems: 'start' }}>
          비밀번호 재설정
        </Heading>
        <form css={[formStyle]} onSubmit={handleSubmit}>
          <Flex styles={{ direction: 'column', width: '100%', gap: '0.2rem', justify: 'space-between' }}>
            <Flex styles={{ align: 'baseline', width: '100%', gap: '0.4rem' }}>
              <Input
                placeholder={PLACEHOLDER.SCHOOL_EMAIL}
                value={email}
                onChange={onEmailChange}
                isSuccess={emailSupportingText.type === 'success'}
                isError={emailSupportingText.type === 'error'}
                supportingText={emailSupportingText.text}
              />
              <Button
                css={{ width: '9.7rem', flexShrink: '0' }}
                variant="outline"
                size="large"
                onClick={handleMailSend}
                disabled={!validateEmail(email)}>
                {buttonText}
              </Button>
            </Flex>
            {isMailSent && !isResendMailError && (
              <Flex
                styles={{
                  align: 'baseline',
                  justify: 'space-between',
                  width: '100%',
                  marginTop: '0.4rem',
                  gap: '0.4rem',
                }}>
                <Input
                  placeholder={PLACEHOLDER.AUTH_CODE}
                  value={authCode}
                  onChange={onAuthCodeChange}
                  isSuccess={codeSupportingText.type === 'success'}
                  isError={codeSupportingText.type === 'error'}
                  supportingText={codeSupportingText.text}
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
