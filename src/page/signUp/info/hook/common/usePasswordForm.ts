import { useSignupMutation } from '@/page/signUp/info/hook/api/useSignupMutation';
import { InfoFormData } from '@/page/signUp/info/hook/common/useInfoForm';

import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

import { UserInfo } from '@/shared/api/signup/info/type';
import { PASSWORD_VALID_FORMAT, SUPPORTING_TEXT } from '@/shared/constant/form';

type PasswordFormData = Omit<UserInfo, keyof InfoFormData>;

type PasswordError = Partial<PasswordFormData>;

export const usePasswordForm = (prevData: InfoFormData) => {
  const [info, setInfo] = useState<PasswordFormData>({ password: '', passwordChecker: '' });
  const [error, setError] = useState<PasswordError>({ password: '', passwordChecker: '' });

  const { mutate: signUpMutate } = useSignupMutation();

  const handleInfoChange = useCallback(
    (key: keyof PasswordFormData) => (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setInfo((prev) => ({
        ...prev,
        [key]: value,
      }));
      if (value !== '') {
        setError((prev) => ({
          ...prev,
          [key]: undefined,
        }));
      }
    },
    []
  );

  const validateForm = useCallback(() => {
    if (info.password === '') {
      setError({
        password: SUPPORTING_TEXT.PASSWORD,
      });

      return false;
    }

    if (info.passwordChecker === '') {
      setError({
        passwordChecker: SUPPORTING_TEXT.PASSWORD_CHECKER,
      });

      return false;
    }

    if (info.password !== info.passwordChecker) {
      setError({
        password: SUPPORTING_TEXT.PASSWORD_NO_EQUAL,
        passwordChecker: SUPPORTING_TEXT.PASSWORD_NO_EQUAL,
      });

      return false;
    }

    if (!PASSWORD_VALID_FORMAT.test(info.password)) {
      setError((prev) => ({
        ...prev,
        password: SUPPORTING_TEXT.PASSWORD_INVALID,
      }));

      return false;
    }

    return true;
  }, [info]);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!validateForm()) return;

      const formData: UserInfo = {
        ...prevData,
        password: info.password,
        passwordChecker: info.passwordChecker,
      };

      signUpMutate(formData);
    },
    [validateForm, info, signUpMutate, prevData]
  );

  return {
    info,
    handleInfoChange,
    handleSubmit,
    error,
  };
};
