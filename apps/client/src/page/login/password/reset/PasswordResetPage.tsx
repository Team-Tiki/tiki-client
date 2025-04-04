import { Button, Flex, Heading, Input, useToastAction } from '@tiki/ui';

import { useLocation, useNavigate } from 'react-router-dom';

import { formStyle, pageStyle } from '@/page/login/password/reset/PasswordResetPage.style';
import { usePasswordForm } from '@/page/login/password/reset/hook/common/usePasswordForm';

import { $api } from '@/shared/api/client';
import { PLACEHOLDER } from '@/shared/constant/form';
import { PATH } from '@/shared/constant/path';

const PasswordResetPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { mutate } = $api.useMutation('patch', '/api/v1/members/password');

  const { createToast } = useToastAction();

  const { form, handlePasswordChange, handlePasswordValidate, passwordSupportingText, passwordCheckerSupportingText } =
    usePasswordForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(
      {
        body: {
          email: state,
          password: form.updatedPassword,
          passwordChecker: form.updatedPasswordChecker,
        },
      },
      {
        onSuccess: () => {
          createToast('비밀번호 재설정에 성공했습니다.', 'success');
          navigate(PATH.LOGIN);
        },
        onError: (error) => {
          createToast(`${error}`, 'error');
        },
      }
    );
  };

  return (
    <Flex style={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Flex tag="section" css={pageStyle}>
        <Heading tag="H4" css={{ fontWeight: 600, alignItems: 'start', paddingBottom: '6rem' }}>
          비밀번호 재설정
        </Heading>
        <form css={formStyle} onSubmit={handleSubmit}>
          <Flex styles={{ direction: 'column', width: '100%', gap: '1.6rem', justify: 'space-between' }}>
            <Input
              type="password"
              placeholder={PLACEHOLDER.PASSWORD}
              value={form.updatedPassword}
              isError={passwordSupportingText.type === 'error'}
              isSuccess={passwordSupportingText.type === 'success'}
              supportingText={passwordSupportingText.text}
              onChange={(e) => handlePasswordChange('updatedPassword', e)}
            />
            <Input
              type="password"
              placeholder={PLACEHOLDER.PASSWORD_CONFIRM}
              value={form.updatedPasswordChecker}
              isError={passwordCheckerSupportingText.type === 'error'}
              isSuccess={passwordCheckerSupportingText.type === 'success'}
              supportingText={passwordCheckerSupportingText.text}
              onChange={(e) => handlePasswordChange('updatedPasswordChecker', e)}
            />
          </Flex>
          <Button
            type="submit"
            variant="primary"
            css={{ width: '100%' }}
            size="xLarge"
            disabled={!handlePasswordValidate()}>
            완료
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default PasswordResetPage;
