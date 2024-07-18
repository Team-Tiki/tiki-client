import { useVerifyCodeMutation } from '@/page/login/password/hook/api/useVerifyCodeMutation';
import { SignUpContext } from '@/page/signUp/info/InfoFormPage';
import {
  formStyle,
  identifyStyle,
  selectTriggerStyle,
  timeStyle,
} from '@/page/signUp/info/component/InfoForm/InfoForm.style';
import { EMAIL_EXPIRED_MESSAGE, EMAIL_REMAIN_TIME, PLACEHOLDER, SUPPORTING_TEXT } from '@/page/signUp/info/constant';
import { useDateInput } from '@/page/signUp/info/hook/useDateInput';
import { useSelect } from '@/page/signUp/info/hook/useSelect';
import { useSendMailMutation } from '@/page/signUp/info/hook/useSendMailMutation';
import { useTimer } from '@/page/signUp/info/hook/useTimer';
import { formatTime } from '@/page/signUp/info/util/formatTime';

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { isAxiosError } from 'axios';

import ArrowDown from '@/common/asset/svg/arrow-down.svg?react';
import ArrowUp from '@/common/asset/svg/arrow-up.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';
import Select from '@/common/component/Select/Select';
import { useOutsideClick, useOverlay } from '@/common/hook';
import { useInput } from '@/common/hook/useInput';

import { useToastStore } from '@/shared/store/toast';

const InfoForm = () => {
  const { isOpen, close, toggle } = useOverlay();
  const ref = useOutsideClick(close);

  const {
    remainTime,
    isTriggered: isMailSent,
    handleTrigger: handleSend,
  } = useTimer(EMAIL_REMAIN_TIME, EMAIL_EXPIRED_MESSAGE);
  const { selectedItem, onSelect, error, onValidate, onReset } = useSelect('');

  const { value: name, onChange: onNameChange, error: nameError, onValidate: onNameValidate } = useInput('');
  const { birth, onBirthChange, error: dateError, onDateValidate } = useDateInput();
  const { value: email, onChange: onEmailChange, error: emailError, onValidate: onEmailValidate } = useInput('');
  const {
    value: authCode,
    onChange: onAuthCodeChange,
    error: authCodeError,
    onValidate: onAuthCodeValidate,
  } = useInput('');

  const context = useContext(SignUpContext);
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);
  const mutate = useSendMailMutation(email, handleSend);
  const { mutate: verifyCode } = useVerifyCodeMutation(email, authCode);
  const { createToast } = useToastStore();

  const handleMailSend = () => {
    mutate(undefined, {
      onSuccess: () => {
        handleSend();
      },
      onError: (error) => {
        if (isAxiosError<{ message: string }>(error)) {
          createToast(`${error.response?.data.message}`, 'error');
        }
      },
    });
  };

  const handleVerifyCode = () => {
    verifyCode(undefined, {
      onSuccess: () => {
        setIsVerified(true);
      },
      onError: (error) => {
        if (isAxiosError<{ message: string }>(error)) {
          createToast(`${error.response?.data.message}`, 'error');
        }
      },
    });
  };

  if (context === undefined) throw new Error();

  const formValidate = () => {
    if (
      !onNameValidate(SUPPORTING_TEXT.NAME) ||
      !onDateValidate() ||
      !onValidate() ||
      !onEmailValidate(SUPPORTING_TEXT.EMAIL) ||
      !onAuthCodeValidate(SUPPORTING_TEXT.AUTHCODE_NO_EQUAL)
    )
      return false;

    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formValidate()) return;

    context?.onRegister((prev) => ({
      ...prev,
      name,
      birth,
      univ: selectedItem,
      email,
    }));

    navigate('password');
  };

  return (
    <form css={formStyle} onSubmit={handleSubmit}>
      <Flex styles={{ direction: 'column', gap: '3.2rem' }}>
        <Input
          value={name}
          onChange={onNameChange}
          isError={Boolean(nameError)}
          variant="underline"
          label="이름"
          placeholder={PLACEHOLDER.NAME}
        />
        <Input
          value={birth}
          onChange={onBirthChange}
          isError={dateError}
          variant="underline"
          label="생년월일"
          placeholder={PLACEHOLDER.BIRTHDAY}
        />

        <Select
          css={{ width: '100%' }}
          ref={ref}
          label="학교"
          onSelect={onSelect}
          isOpen={isOpen}
          trigger={
            <button
              type="button"
              css={selectTriggerStyle(error)}
              onClick={() => {
                toggle();
                onReset();
              }}>
              {selectedItem || PLACEHOLDER.SCHOOL}
              {isOpen ? <ArrowUp /> : <ArrowDown />}
            </button>
          }
          options={['인하대학교', '건국대학교', '숙명여자대학교', '시립대학교', '중앙대학교']}
        />

        <Flex styles={{ align: 'end', justify: 'space-between', width: '100%', gap: '0.8rem' }}>
          <Input
            value={email}
            onChange={onEmailChange}
            isError={Boolean(emailError)}
            css={{ width: '30rem' }}
            variant="underline"
            label="학교 인증"
            placeholder={PLACEHOLDER.VERIFY}
          />
          <Button size="large" onClick={handleMailSend}>
            인증 메일 발송
          </Button>
        </Flex>
        {isMailSent && (
          <Flex css={identifyStyle}>
            <Input
              value={authCode}
              onChange={onAuthCodeChange}
              isError={Boolean(authCodeError)}
              css={{ width: '30rem' }}
              variant="underline"
              placeholder={PLACEHOLDER.AUTH_CODE}
            />
            <span css={timeStyle}>{formatTime(remainTime)}</span>
            <Button size="large" onClick={() => handleVerifyCode()}>
              인증하기
            </Button>
          </Flex>
        )}
      </Flex>
      <Button type="submit" variant="primary" size="large" disabled={!isVerified}>
        다음
      </Button>
    </form>
  );
};

export default InfoForm;
