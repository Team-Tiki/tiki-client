import { SUPPORTING_TEXT } from '@/page/login/constant';
import { useResendMailMutation } from '@/page/login/password/hook/api/useResendMailMutation';
import { useVerifyCodeMutation } from '@/page/login/password/hook/api/useVerifyCodeMutation';
import { formStyle, pageStyle, timestyle } from '@/page/login/password/passwordAuth/PasswordAuthPage.style';
import { validateCode, validateEmail } from '@/page/login/password/util/validateInput';
import { EMAIL_EXPIRED_MESSAGE, EMAIL_REMAIN_TIME, PLACEHOLDER } from '@/page/signUp/info/constant';
import { formatTime } from '@/page/signUp/info/util/formatTime';

import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Input from '@/common/component/Input/Input';
import SupportingText from '@/common/component/SupportingText/SupportingText';
import { useInput } from '@/common/hook/useInput';
import { useTimer } from '@/common/hook/useTimer';

import { PATH } from '@/shared/constant/path';

const PasswordAuthPage = () => {
  const [isVerifyCode, setIsVerifyCode] = useState(false);
  const { value: email, onChange: onEmailChange } = useInput('');
  const { value: authCode, onChange: onAuthCodeChange } = useInput('');

  const {
    remainTime,
    isTriggered: isMailSent,
    handleTrigger: handleSend,
  } = useTimer(EMAIL_REMAIN_TIME, EMAIL_EXPIRED_MESSAGE);

  const navigate = useNavigate();
  const { resendMailMutation } = useResendMailMutation(email);
  const { mutate, isError } = useVerifyCodeMutation(email, authCode);

  const handleMailSend = useCallback(() => {
    if (validateEmail(email)) {
      resendMailMutation(undefined, {
        onSuccess: () => {
          handleSend();
        },
      });
    }
  }, [email, resendMailMutation, handleSend]);

  const handleVerifyCode = useCallback(() => {
    if (validateCode(authCode)) {
      mutate(undefined, {
        onSuccess: () => {
          setIsVerifyCode(true);
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
        <Heading css={{ padding: '1.6rem 0', alignItems: 'start' }}>비밀번호 재설정</Heading>
        <form css={[formStyle, { width: '51.1rem', height: '78rem' }]} onSubmit={handleSubmit}>
          <Flex styles={{ direction: 'column', width: '100%', gap: '1.6rem', justify: 'space-between' }}>
            <Flex styles={{ align: 'end', width: '100%', gap: '0.8rem' }}>
              <Input
                variant="underline"
                label="회원 정보"
                placeholder={PLACEHOLDER.SCHOOL_EMAIL}
                value={email}
                onChange={onEmailChange}
              />
              <Button css={{ width: '11.1rem' }} size="large" onClick={handleMailSend} disabled={!validateEmail(email)}>
                인증 메일 발송
              </Button>
            </Flex>
            {isMailSent && (
              <>
                <SupportingText isNotice={true}>{SUPPORTING_TEXT.AUTH_CODE}</SupportingText>
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
                    onChange={onAuthCodeChange}
                  />
                  <span css={timestyle}>{formatTime(remainTime)}</span>
                  <Button
                    css={{ width: '13rem' }}
                    size="large"
                    onClick={handleVerifyCode}
                    disabled={!validateCode(authCode)}>
                    인증하기
                  </Button>
                </Flex>
              </>
            )}
          </Flex>
          <Button type="submit" variant="primary" size="large" disabled={!isVerifyCode}>
            완료
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default PasswordAuthPage;
