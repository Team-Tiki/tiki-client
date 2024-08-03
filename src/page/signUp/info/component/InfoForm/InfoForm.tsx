import { formStyle, identifyStyle, timeStyle } from '@/page/signUp/info/component/InfoForm/InfoForm.style';
import UnivSelectTriggerButton from '@/page/signUp/info/component/UnivSelectTriggerButton/Button';
import { useSendMailMutation } from '@/page/signUp/info/hook/api/useSendMailMutation';
import { useDateInput } from '@/page/signUp/info/hook/common/useDateInput';
import { useSelect } from '@/page/signUp/info/hook/common/useSelect';
import { useTimer } from '@/page/signUp/info/hook/common/useTimer';
import { formatTime } from '@/page/signUp/info/util/formatTime';

import React, { SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowDown from '@/common/asset/svg/arrow-down.svg?react';
import ArrowUp from '@/common/asset/svg/arrow-up.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';
import Select from '@/common/component/Select/Select';
import { useOutsideClick, useOverlay } from '@/common/hook';
import { useInput } from '@/common/hook/useInput';

import { UserInfo } from '@/shared/api/signup/info/type';
import { EMAIL_REMAIN_TIME, PLACEHOLDER, SUPPORTING_TEXT, UNIV_EMAIL_FORMAT } from '@/shared/constant/form';
import { PATH } from '@/shared/constant/path';
import { useVerifyCodeMutation } from '@/shared/hook/api/useVerifyCodeMutation';
import { useToastAction } from '@/shared/store/toast';
import { validateCode, validateEmail } from '@/shared/util/validate';

interface InfoFormProps {
  onInfoChange: React.Dispatch<SetStateAction<UserInfo>>;
}

const InfoForm = ({ onInfoChange }: InfoFormProps) => {
  const { isOpen, close, toggle, open } = useOverlay();
  const ref = useOutsideClick(close);

  const {
    remainTime,
    isTriggered: isMailSent,
    handleTrigger: onSend,
    handleReset: onTimerReset,
    handleFail: onFail,
    handleStop: onStop,
  } = useTimer(EMAIL_REMAIN_TIME, SUPPORTING_TEXT.EMAIL_EXPIRED);

  const { selectedItem, onSelect, error, onValidate, onReset } = useSelect(close);

  const { value: name, onChange: onNameChange, error: nameError, onValidate: onNameValidate } = useInput('');
  const { birth, onBirthChange, error: dateError, onDateValidate } = useDateInput();
  const { value: email, onChange: onEmailChange, error: emailError, onValidate: onEmailValidate } = useInput('');
  const {
    value: authCode,
    onChange: onAuthCodeChange,
    error: authCodeError,
    onValidate: onAuthCodeValidate,
  } = useInput('');

  const navigate = useNavigate();

  const { mutate: sendMailMutate } = useSendMailMutation(email, onFail);
  const { mutate: verifyCodeMutate, isSuccess: isVerified } = useVerifyCodeMutation(email, authCode);

  if (isVerified) onStop();

  const { createToast } = useToastAction();

  const handleMailSend = () => {
    if (!UNIV_EMAIL_FORMAT.test(email)) {
      createToast(SUPPORTING_TEXT.EMAIL_INVALID, 'error');

      return;
    }
    if (isMailSent) {
      onTimerReset();
    }

    onSend();

    sendMailMutate();
  };

  const formValidate = () => {
    if (
      !onNameValidate(SUPPORTING_TEXT.NAME) ||
      !onDateValidate() ||
      !onValidate() ||
      !onEmailValidate(SUPPORTING_TEXT.EMAIL) ||
      !onAuthCodeValidate(SUPPORTING_TEXT.AUTHCODE_NO_EQUAL) ||
      !isVerified
    )
      return false;

    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formValidate()) return;

    onInfoChange((prev) => ({
      ...prev,
      name,
      birth,
      univ: selectedItem,
      email,
    }));

    navigate(PATH.SIGNUP_PASSWORD);
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
            <UnivSelectTriggerButton
              onOpen={open}
              isError={error}
              onSelectClick={() => {
                toggle();
                onReset();
              }}>
              {selectedItem || PLACEHOLDER.SCHOOL}
              {isOpen ? <ArrowUp /> : <ArrowDown />}
            </UnivSelectTriggerButton>
          }
          options={['인하대학교', '건국대학교', '숙명여자대학교', '시립대학교', '중앙대학교']}
        />

        <Flex styles={{ align: 'end', justify: 'space-between', width: '100%', gap: '0.8rem' }}>
          <Input
            value={email}
            onChange={onEmailChange}
            isError={Boolean(emailError)}
            variant="underline"
            label="학교 인증"
            placeholder={PLACEHOLDER.VERIFY}
          />
          <Button
            css={{ padding: '1rem 1.6rem', width: '11rem' }}
            size="large"
            onClick={handleMailSend}
            disabled={!validateEmail(email) || isVerified}>
            인증 메일 발송
          </Button>
        </Flex>
        {isMailSent && (
          <Flex css={identifyStyle} styles={{ align: 'end', justify: 'space-between', gap: '0.8rem' }}>
            <Input
              value={authCode}
              onChange={onAuthCodeChange}
              isError={Boolean(authCodeError)}
              variant="underline"
              placeholder={PLACEHOLDER.AUTH_CODE}
            />
            <span css={timeStyle}>{formatTime(remainTime)}</span>
            <Button
              css={{ padding: '1rem 1.6rem', width: '13rem' }}
              size="large"
              onClick={verifyCodeMutate}
              disabled={!validateCode(authCode)}>
              인증하기
            </Button>
          </Flex>
        )}
      </Flex>
      <Button type="submit" variant="primary" size="large">
        다음
      </Button>
    </form>
  );
};

export default InfoForm;
