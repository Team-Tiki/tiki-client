import { useCallback, useState } from 'react';

import { PASSWORD_VALID_FORMAT, SUPPORTING_TEXT } from '@/shared/constant/form';

type Password = 'updatedPassword' | 'updatedPasswordChecker';

export const usePasswordForm = () => {
  const [form, setForm] = useState({
    updatedPassword: '',
    updatedPasswordChecker: '',
  });

  const handlePasswordChange = useCallback((key: Password, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const handlePasswordValidate = useCallback(() => {
    const isPasswordValid = PASSWORD_VALID_FORMAT.test(form.updatedPassword);

    const isConfirmPasswordValid = form.updatedPassword === form.updatedPasswordChecker;

    return form.updatedPassword && form.updatedPasswordChecker && isPasswordValid && isConfirmPasswordValid;
  }, [form.updatedPassword, form.updatedPasswordChecker]);

  // 에러에 맞는 supporting text 반환
  const handlePasswordMessage = useCallback((password: string) => {
    if (password === '') {
      return SUPPORTING_TEXT.PASSWORD;
    }

    if (!PASSWORD_VALID_FORMAT.test(password)) {
      return SUPPORTING_TEXT.PASSWORD_INVALID;
    }

    return '';
  }, []);

  const handlePasswordCheckerMessage = useCallback((password: string, passwordChecker: string) => {
    if (passwordChecker === '') {
      return SUPPORTING_TEXT.PASSWORD;
    }

    if (password !== passwordChecker) {
      return SUPPORTING_TEXT.PASSWORD_NO_EQUAL;
    }

    return '';
  }, []);

  const isPasswordError = !!form.updatedPassword && !handlePasswordValidate();
  const isPasswordCheckerError = !!form.updatedPasswordChecker && !handlePasswordValidate();
  const passwordSupportingTxt = form.updatedPassword && handlePasswordMessage(form.updatedPassword);
  const passwordCheckerSupportingTxt =
    form.updatedPasswordChecker && handlePasswordCheckerMessage(form.updatedPassword, form.updatedPasswordChecker);

  return {
    form,
    handlePasswordChange,
    handlePasswordValidate,
    handlePasswordMessage,
    handlePasswordCheckerMessage,
    isPasswordError,
    isPasswordCheckerError,
    passwordSupportingTxt,
    passwordCheckerSupportingTxt,
  };
};
