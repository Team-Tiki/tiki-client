import { useResetPasswordMutation } from '@/page/login/password/hook/useResetPasswordMutation';
import { formStyle, pageStyle } from '@/page/login/password/passwordReset/PasswordResetPage.style';
import { PLACEHOLDER } from '@/page/signUp/info/constant';

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Input from '@/common/component/Input/Input';

import { useToastStore } from '@/shared/store/toast';

const PasswordResetPage = () => {
  const [updatePassword, setUpdatePassword] = useState('');
  const [updatePasswordConfirm, setUpdatePasswordConfirm] = useState('');
  const navigate = useNavigate();
  const { state } = useLocation();
  const { mutate } = useResetPasswordMutation();
  const { createToast } = useToastStore();

  useEffect(() => {
    console.log(state);
    console.log(updatePassword);
    console.log(setUpdatePasswordConfirm);
  });

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
          navigate('/login');
          createToast('비밀번호 재설정에 성공했습니다.', 'success');
        },
        onError: () => {
          createToast('비밀번호 재설정에 실패했습니다', 'error');
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
