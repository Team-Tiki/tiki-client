import { formStyle, pageStyle } from '@/page/login/password/reset/PasswordResetPage.style';
import { useResetPasswordMutation } from '@/page/login/password/reset/hook/useResetPasswordMutation';
import { PLACEHOLDER } from '@/page/signUp/info/constant';

import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Input from '@/common/component/Input/Input';

import { PATH } from '@/shared/constant/path';

const PasswordResetPage = () => {
  const [updatePassword, setUpdatePassword] = useState('');
  const [updatePasswordConfirm, setUpdatePasswordConfirm] = useState('');
  const navigate = useNavigate();
  const { state } = useLocation();
  const { mutate } = useResetPasswordMutation();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatePassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatePasswordConfirm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(
      {
        email: state,
        password: updatePassword,
        passwordChecker: updatePasswordConfirm,
      },
      {
        onSuccess: () => {
          navigate(PATH.LOGIN);
        },
      }
    );
  };

  return (
    <Flex style={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Flex tag="section" css={pageStyle}>
        <Heading css={{ padding: '1.6rem 0', alignItems: 'start' }}>비밀번호 재설정</Heading>
        <form css={formStyle} onSubmit={handleSubmit}>
          <Flex styles={{ direction: 'column', width: '100%', gap: '1.6rem', justify: 'space-between' }}>
            <Input
              variant="underline"
              placeholder={PLACEHOLDER.PASSWORD}
              value={updatePassword}
              onChange={handlePasswordChange}
            />
            <Input
              variant="underline"
              placeholder={PLACEHOLDER.PASSWORD_CONFIRM}
              value={updatePasswordConfirm}
              onChange={handlePasswordConfirmChange}
            />
          </Flex>
          <Button
            type="submit"
            variant="primary"
            size="large"
            disabled={updatePassword.length === 0 || updatePassword !== updatePasswordConfirm}>
            완료
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default PasswordResetPage;
