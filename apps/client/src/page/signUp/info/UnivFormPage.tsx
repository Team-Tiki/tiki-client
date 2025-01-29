import { Button, Flex, Heading, Input, Select, useToastAction } from '@tiki/ui';
import { useTimer } from '@tiki/utils';

import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { isAxiosError } from 'axios';

import { formStyle, pageStyle } from '@/page/signUp/info/InfoFormPage.style';
import { timeStyle } from '@/page/signUp/info/UnivFormPage.style';
import { useUnivForm } from '@/page/signUp/info/hook/common/useUnivForm';
import { formatTime } from '@/page/signUp/info/util/formatTime';

import { $api } from '@/shared/api/client';
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

const UnivFormPage = () => {
  const { inputs, handleChange, select, selectedUniv } = useUnivForm();

  const { remainTime, handleTrigger, handleReset } = useTimer(60, () => {
    createToast('유효시간이 지났습니다.');
    setIsMailSended(false);
  });

  const [isMailSended, setIsMailSended] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const navigate = useNavigate();

  const { createToast } = useToastAction();

  const { mutate } = useMutation({
    mutationFn: (email: string) => postEmail(email),
    onMutate: () => {
      setIsMailSended(true);

      handleTrigger();
    },
    onSuccess: () => {
      setIsMailSended(true);
    },
    onError: (error) => {
      setIsMailSended(false);

      handleReset();

      if (isAxiosError<{ message: string }>(error)) {
        createToast(`${error.response?.data.message}`, 'error');
      }
    },
  });

  const { mutate: verify } = $api.useMutation('post', '/api/v1/email/verification/checking', {
    onSuccess: () => {
      createToast('인증되었습니다.', 'success');
      setIsVerified(true);
    },
    onError: (error) => {
      createToast(`${error}`, 'success');
      setIsVerified(false);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedUniv || !inputs.email || !isVerified) return;

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
              supportingText="메일함에서 인증 번호를 확인해주세요"
            />
            <Button
              onClick={() => mutate(inputs.email)}
              variant="outline"
              size="large"
              css={{ minWidth: '10rem', marginBottom: '1.88rem' }}>
              인증 메일 전송
            </Button>
          </Flex>
          {isMailSended ? (
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
        <Button type="submit" size="xLarge" css={{ width: '100%' }}>
          다음
        </Button>
      </form>
    </Flex>
  );
};

export default UnivFormPage;
