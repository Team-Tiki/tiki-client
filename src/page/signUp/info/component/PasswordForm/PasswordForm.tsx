import { formStyle } from '@/page/signUp/info/component/InfoForm/InfoForm.style';

import React, { HTMLAttributes } from 'react';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';
import { useInput } from '@/common/hook/useInput';

import { UserInfo } from '@/shared/api/signup/info/type';
import { PASSWORD_VALID_FORMAT, PLACEHOLDER, SUPPORTING_TEXT } from '@/shared/constant/form';

interface PasswordFormProps extends Omit<HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  userInfo: UserInfo;
  onSubmit?: (info: UserInfo) => void;
}

const PasswordForm = ({ userInfo, onSubmit }: PasswordFormProps) => {
  const { value: password, onChange: onPasswordChange, onValidate, error: passwordError } = useInput('');
  const {
    value: passwordChecker,
    onChange: onPasswordCheckerChange,
    onValidate: onCheckerValidate,
    error: checkerError,
  } = useInput('');

  const formValidate = () => {
    if (!onValidate(SUPPORTING_TEXT.PASSWORD) || !onCheckerValidate(SUPPORTING_TEXT.PASSWORD_CHECKER)) return false;

    if (!onCheckerValidate(SUPPORTING_TEXT.PASSWORD_NO_EQUAL, password !== passwordChecker)) return false;

    if (!onValidate(SUPPORTING_TEXT.PASSWORD_INVALID, !PASSWORD_VALID_FORMAT.test(password))) return false;

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formValidate()) return;

    const formData = {
      ...userInfo,
      password,
      passwordChecker,
    };

    onSubmit?.(formData);
  };

  return (
    <form onSubmit={handleSubmit} css={formStyle}>
      <Flex styles={{ direction: 'column', width: '100%', gap: '1.2rem', grow: '1' }}>
        <Input
          type="password"
          isError={Boolean(passwordError)}
          value={password}
          onChange={onPasswordChange}
          variant="underline"
          label="비밀번호 설정"
          placeholder={PLACEHOLDER.PASSWORD}
        />
        <Input
          type="password"
          isError={Boolean(checkerError || passwordError)}
          supportingText={checkerError || passwordError}
          value={passwordChecker}
          onChange={onPasswordCheckerChange}
          variant="underline"
          placeholder={PLACEHOLDER.PASSWORD_CONFIRM}
        />
      </Flex>
      <Button type="submit" variant="primary" size="large">
        다음
      </Button>
    </form>
  );
};

export default PasswordForm;
