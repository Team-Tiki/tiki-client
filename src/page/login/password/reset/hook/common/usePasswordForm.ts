import { useCallback, useState } from 'react';

import { PASSWORD_VALID_FORMAT, SUPPORTING_TEXT } from '@/shared/constant/form';

export const usePasswordForm = () => {
  const [updatedPassword, setUpdatedPassword] = useState('');
  const [updatedConfirmPassword, setUpdatedConfirmPassword] = useState('');

  const [isPasswordFocus, setIsPasswordFocused] = useState(false);
  const [isPasswordConfirmFocus, setIsPasswordConfirmFocused] = useState(false);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedPassword(e.target.value);
    setIsPasswordFocused(true);
  }, []);

  const handlePasswordConfirmChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedConfirmPassword(e.target.value);
    setIsPasswordConfirmFocused(true);
  }, []);

  const handlePasswordValidate = useCallback(() => {
    const isPasswordValid = PASSWORD_VALID_FORMAT.test(updatedPassword);

    const isConfirmPasswordValid = updatedPassword === updatedConfirmPassword;

    return updatedPassword && updatedConfirmPassword && isPasswordValid && isConfirmPasswordValid;
  }, [updatedPassword, updatedConfirmPassword]);

  const handlePasswordMessage = useCallback(
    (password: string) => {
      if (!isPasswordFocus) return '';

      if (password === '') {
        return SUPPORTING_TEXT.PASSWORD;
      }

      if (!PASSWORD_VALID_FORMAT.test(password)) {
        return SUPPORTING_TEXT.PASSWORD_INVALID;
      }

      return '';
    },
    [isPasswordFocus]
  );

  const handleConfirmPasswordMessage = useCallback(
    (password: string, passwordChecker: string) => {
      if (!isPasswordConfirmFocus) return '';

      if (passwordChecker === '') {
        return SUPPORTING_TEXT.PASSWORD;
      }

      if (password !== passwordChecker) {
        return SUPPORTING_TEXT.PASSWORD_NO_EQUAL;
      }

      return '';
    },
    [isPasswordConfirmFocus]
  );

  return {
    updatedPassword,
    updatedConfirmPassword,
    isPasswordFocus,
    isPasswordConfirmFocus,
    handlePasswordChange,
    handlePasswordConfirmChange,
    handlePasswordValidate,
    handlePasswordMessage,
    handleConfirmPasswordMessage,
  };
};
