import { Button, Flex, Heading, Input, Select, useToastAction } from '@tiki/ui';
import { useTimer } from '@tiki/utils';

import { FormEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { formStyle, pageStyle } from '@/page/signUp/info/InfoFormPage.style';
import { timeStyle } from '@/page/signUp/info/UnivFormPage.style';
import { useUnivForm } from '@/page/signUp/info/hook/common/useUnivForm';
import { formatTime } from '@/page/signUp/info/util/formatTime';

import { HTTPError } from '@/shared/api/HTTPError';
import { $api_public } from '@/shared/api/client';
import { postEmail } from '@/shared/api/email-verification/signup';
import { PLACEHOLDER } from '@/shared/constant/form';
import { PATH } from '@/shared/constant/path';

const options = [
  {
    value: '건국대학교',
  },
  {
    value: '인하대학교',
  },
];

const VERITY_MAX_TIME = 60 * 3;

const DEFAULT_VERITY_STATUS = {
  trigger: false,
  sendBtnText: '인증 메일 전송',
  text: '학교 웹메일을 입력해주세요',
  isVerified: false,
  error: false,
};

const UnivFormPage = () => {
  const { inputs, handleChange, select, selectedUniv } = useUnivForm();

  const { remainTime, handleTrigger, handleReset, handleStop } = useTimer(VERITY_MAX_TIME, () => {
    setVerifyStatus((prev) => ({ ...prev, sendBtnText: '재전송' }));
  });

  const [verifyStatus, setVerifyStatus] = useState(DEFAULT_VERITY_STATUS);
  const ref = useRef<ReturnType<typeof setTimeout>>();

  const navigate = useNavigate();

  const { createToast } = useToastAction();

  const submitDisabled = !(verifyStatus.isVerified && selectedUniv);
  const verifyBtnDisabled = remainTime === 0 || !inputs.code;

  const { mutate } = useMutation({
    mutationFn: (email: string) => postEmail(email),
    onMutate: () => {
      ref.current = setTimeout(() => {
        setVerifyStatus((prev) => ({
          ...prev,
          trigger: true,
          text: '메일함에서 인증번호를 확인해주세요.',
          error: false,
        }));
        handleTrigger();
      }, 200);
    },
    onError: () => {
      handleReset();

      setVerifyStatus((prev) => ({ ...prev, text: '잘못된 형식의 메일주소입니다.', error: true }));
    },
    onSettled: () => clearTimeout(ref.current),
  });

  const { mutate: verify } = $api_public.useMutation('post', '/api/v1/email/verification/checking', {
    onSuccess: () => {
      createToast('인증되었습니다.', 'success');

      handleStop();
      setVerifyStatus((prev) => ({ ...prev, isVerified: true }));
    },
    onError: (error: HTTPError) => {
      createToast(`${error.message}`, 'error');
      setVerifyStatus((prev) => ({ ...prev, isVerified: false }));
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedUniv || !inputs.email || !verifyStatus.isVerified) return;

    sessionStorage.setItem(
      'step1',
      JSON.stringify({
        email: inputs.email,
        univ: selectedUniv,
      })
    );

    navigate(`${PATH.SIGNUP_INFO}?step=2`);
  };

  return (
    <Flex tag="main" css={pageStyle}>
      <form onSubmit={handleSubmit} css={formStyle}>
        <Heading tag="H4">회원가입</Heading>
        <Flex styles={{ direction: 'column', gap: '1.6rem' }}>
          <Select variant="outline" label="학교" placeholder={PLACEHOLDER.SCHOOL} options={options} onSelect={select} />
          <Flex styles={{ gap: '0.4rem', width: '100%', align: 'end', marginTop: '0.4rem' }}>
            <Input
              value={inputs.email}
              onChange={(e) => handleChange(e, 'email')}
              label="학교 인증"
              placeholder={PLACEHOLDER.SCHOOL_EMAIL}
              supportingText={verifyStatus.text}
              isSuccess={verifyStatus.trigger}
              isError={verifyStatus.error}
            />
            <Button
              onClick={() => {
                if (verifyStatus.sendBtnText === '재전송') {
                  handleReset();
                }
                mutate(inputs.email);
              }}
              disabled={!inputs.email}
              variant="outline"
              size="large"
              css={{ minWidth: '10rem', marginBottom: '1.88rem' }}>
              {verifyStatus.sendBtnText}
            </Button>
          </Flex>
          {verifyStatus.trigger ? (
            <Flex styles={{ gap: '0.4rem', width: '100%', align: 'center' }}>
              <div css={{ width: '100%', position: 'relative' }}>
                <Input
                  type="password"
                  maxLength={6}
                  value={inputs.code}
                  onChange={(e) => handleChange(e, 'code')}
                  placeholder={PLACEHOLDER.AUTH_CODE}
                />
                <span css={timeStyle}>{formatTime(remainTime)}</span>
              </div>
              <Button
                onClick={() =>
                  verify({
                    body: {
                      email: inputs.email,
                      code: inputs.code,
                    },
                  })
                }
                disabled={verifyStatus.isVerified || verifyBtnDisabled}
                variant="outline"
                size="large"
                css={{ minWidth: '10rem' }}>
                인증하기
              </Button>
            </Flex>
          ) : (
            <div css={{ height: '4rem' }} />
          )}
        </Flex>
        <Button disabled={submitDisabled} type="submit" size="xLarge" css={{ width: '100%' }}>
          다음
        </Button>
      </form>
    </Flex>
  );
};

export default UnivFormPage;
