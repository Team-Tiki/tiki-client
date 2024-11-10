import { useCallback, useEffect, useState } from 'react';

import { SupportingText } from '@/page/login/password/type/supportingText';

import { PASSWORD_VALID_FORMAT, SUPPORTING_TEXT } from '@/shared/constant/form';

type Password = 'updatedPassword' | 'updatedPasswordChecker';

export const usePasswordForm = () => {
  const [form, setForm] = useState({
    updatedPassword: '',
    updatedPasswordChecker: '',
  });

  const [passwordSupportingText, setPasswordSupportingText] = useState<SupportingText>({
    text: SUPPORTING_TEXT.PASSWORD_NOTICE,
    type: 'default',
  });

  const [passwordCheckerSupportingText, setPasswordCheckerSupportingText] = useState<SupportingText>({
    text: SUPPORTING_TEXT.PASSWORD_CHECKER,
    type: 'default',
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

  const handlePasswordMessage = useCallback(
    (password: string) => {
      if (password === '') {
        setPasswordSupportingText({ text: SUPPORTING_TEXT.PASSWORD_NOTICE, type: 'default' });

        return SUPPORTING_TEXT.PASSWORD_NOTICE;
      }

      if (!PASSWORD_VALID_FORMAT.test(password)) {
        setPasswordSupportingText({ text: SUPPORTING_TEXT.PASSWORD_INVALID, type: 'error' });

        return SUPPORTING_TEXT.PASSWORD_NOTICE;
      }

      setPasswordSupportingText({ text: SUPPORTING_TEXT.PASSWORD_VALID, type: 'success' });

      return SUPPORTING_TEXT.PASSWORD_VALID;
    },
    [form.updatedPassword]
  );

  const handlePasswordCheckerMessage = useCallback(
    (password: string, passwordChecker: string) => {
      if (passwordChecker === '') {
        setPasswordCheckerSupportingText({ text: SUPPORTING_TEXT.PASSWORD_CHECKER, type: 'default' });

        return SUPPORTING_TEXT.PASSWORD_CHECKER;
      }

      if (password !== passwordChecker) {
        setPasswordCheckerSupportingText({ text: SUPPORTING_TEXT.PASSWORD_NO_EQUAL, type: 'error' });

        return SUPPORTING_TEXT.PASSWORD_NO_EQUAL;
      }

      setPasswordCheckerSupportingText({ text: SUPPORTING_TEXT.PASSWORD_EQUAL, type: 'success' });

      return SUPPORTING_TEXT.PASSWORD_EQUAL;
    },
    [form.updatedPassword, form.updatedPasswordChecker]
  );

  useEffect(() => {
    handlePasswordMessage(form.updatedPassword);
  }, [form.updatedPassword, handlePasswordMessage]);

  useEffect(() => {
    handlePasswordCheckerMessage(form.updatedPassword, form.updatedPasswordChecker);
  }, [form.updatedPasswordChecker, handlePasswordCheckerMessage]);

  return {
    form,
    handlePasswordChange,
    handlePasswordValidate,
    handlePasswordMessage,
    handlePasswordCheckerMessage,
    passwordSupportingText,
    passwordCheckerSupportingText,
  };
};
