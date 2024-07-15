import { formStyle, pageStyle } from '@/page/login/passwordAuth/PasswordAuthPage.style';
import { PLACEHOLDER } from '@/page/signUp/info/constant';

import { useState } from 'react';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Input from '@/common/component/Input/Input';

const PasswordResetPage = () => {
  const [updatePassword, setUpdatePassword] = useState('');
  const [updatePasswordConfirm, setUpdatePasswordConfirm] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatePassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatePasswordConfirm(e.target.value);
  };

  return (
    <Flex tag="section" css={pageStyle}>
      <Heading css={{ padding: '1.6rem 0', alignItems: 'start' }}>비밀번호 재설정</Heading>
      <form css={formStyle}>
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
  );
};

export default PasswordResetPage;
