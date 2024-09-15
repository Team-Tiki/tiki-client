import { useCallback, useState } from 'react';

import { PASSWORD_VALID_FORMAT, SUPPORTING_TEXT } from '@/shared/constant/form';

export const usePasswordForm = () => {
  const [form, setForm] = useState({
    updatedPassword: '',
    updatedPasswordChecker: '',
    isFocused: {
      updatedPassword: false,
      updatedPasswordChecker: false,
    },
  });

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      updatedPassword: e.target.value,
      isFocused: {
        ...prev.isFocused,
        updatedPassword: true,
      },
    }));
  }, []);

  const handlePasswordConfirmChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      updatedPasswordChecker: e.target.value,
      isFocused: {
        ...prev.isFocused,
        updatedPasswordChecker: true,
      },
    }));
  }, []);

  const handlePasswordValidate = useCallback(() => {
    const isPasswordValid = PASSWORD_VALID_FORMAT.test(form.updatedPassword);

    const isConfirmPasswordValid = form.updatedPassword === form.updatedPasswordChecker;

    return form.updatedPassword && form.updatedPasswordChecker && isPasswordValid && isConfirmPasswordValid;
  }, [form.updatedPassword, form.updatedPasswordChecker]);

  // 에러에 맞는 supporting text 반환
  const handlePasswordMessage = useCallback(
    (password: string) => {
      if (!form.isFocused.updatedPassword) return '';

      if (password === '') {
        return SUPPORTING_TEXT.PASSWORD;
      }

      if (!PASSWORD_VALID_FORMAT.test(password)) {
        return SUPPORTING_TEXT.PASSWORD_INVALID;
      }

      return '';
    },
    [form.isFocused.updatedPassword]
  );

  const handlePasswordCheckerMessage = useCallback(
    (password: string, passwordChecker: string) => {
      if (!form.isFocused.updatedPasswordChecker) return '';

      if (passwordChecker === '') {
        return SUPPORTING_TEXT.PASSWORD;
      }

      if (password !== passwordChecker) {
        return SUPPORTING_TEXT.PASSWORD_NO_EQUAL;
      }

      return '';
    },
    [form.isFocused.updatedPasswordChecker]
  );

  return {
    form,
    handlePasswordChange,
    handlePasswordConfirmChange,
    handlePasswordValidate,
    handlePasswordMessage,
    handlePasswordCheckerMessage,
  };
};
