import { useLocation, useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Input from '@/common/component/Input/Input';

import { formStyle, pageStyle } from '@/page/login/password/reset/PasswordResetPage.style';

import { PLACEHOLDER } from '@/shared/constant/form';
import { PATH } from '@/shared/constant/path';

import { useResetPasswordMutation } from './hook/api/useResetPasswordMutation';
import { usePasswordForm } from './hook/common/usePasswordForm';

const PasswordResetPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { mutate } = useResetPasswordMutation();

  const {
    form,
    handlePasswordChange,
    handlePasswordConfirmChange,
    handlePasswordValidate,
    handlePasswordMessage,
    handlePasswordCheckerMessage,
  } = usePasswordForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(
      {
        email: state,
        password: form.updatedPassword,
        passwordChecker: form.updatedPasswordChecker,
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
              type="password"
              placeholder={PLACEHOLDER.PASSWORD}
              value={form.updatedPassword}
              isError={form.focused.updatedPassword && !handlePasswordValidate()}
              supportingText={handlePasswordMessage(form.updatedPassword)}
              onChange={handlePasswordChange}
            />
            <Input
              variant="underline"
              type="password"
              placeholder={PLACEHOLDER.PASSWORD_CONFIRM}
              value={form.updatedPasswordChecker}
              isError={form.focused.updatedPasswordChecker && !handlePasswordValidate()}
              supportingText={handlePasswordCheckerMessage(form.updatedPassword, form.updatedPasswordChecker)}
              onChange={handlePasswordConfirmChange}
            />
          </Flex>
          <Button type="submit" variant="primary" size="large" disabled={!handlePasswordValidate()}>
            완료
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default PasswordResetPage;
