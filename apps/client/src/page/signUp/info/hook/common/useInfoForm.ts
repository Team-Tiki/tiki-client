import { useError } from '@tiki/utils';

import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

import { useSignupMutation } from '@/page/signUp/info/hook/api/useSignupMutation';

import { UserInfo } from '@/shared/api/signup/info/type';
import { PASSWORD_VALID_FORMAT, SUPPORTING_TEXT } from '@/shared/constant/form';
import { hasKeyInObject } from '@/shared/util/typeGuard';

export type InfoFormData = Omit<UserInfo, 'univ' | 'email'>;

const IS_EMPTY_STRING = {
  name: SUPPORTING_TEXT.NAME,
  birth: SUPPORTING_TEXT.BIRTH,
  password: SUPPORTING_TEXT.PASSWORD,
  passwordChecker: SUPPORTING_TEXT.PASSWORD_CHECKER,
} as const;

export const useInfoForm = () => {
  const [info, setInfo] = useState<InfoFormData>({ name: '', birth: new Date(), password: '', passwordChecker: '' });

  const { error, updateFieldError, clearFieldError, setErrors } = useError<Omit<InfoFormData, 'birth'>>({
    name: '',
    password: '',
    passwordChecker: '',
  });

  const [validMessage, setValidMessage] = useState({
    password: '',
    passwordChecker: '',
  });

  const { mutate } = useSignupMutation();

  const handleInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name: key } = e.target;

    setInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
    if (value !== '' && hasKeyInObject(error, key)) {
      clearFieldError(key);
    }
  };

  const handleBirthChange = useCallback((date: Date | null) => {
    setInfo((prev) => ({
      ...prev,
      birth: date ?? new Date(),
    }));
  }, []);

  const validatePassword = useCallback(() => {
    let passwordError = false;
    let passwordCheckerError = false;

    if (info.password === '') {
      updateFieldError('password', SUPPORTING_TEXT.PASSWORD);

      passwordError = true;
    }

    if (!PASSWORD_VALID_FORMAT.test(info.password)) {
      updateFieldError('password', SUPPORTING_TEXT.PASSWORD_INVALID);

      passwordError = true;
    }

    if (info.passwordChecker === '') {
      updateFieldError('passwordChecker', SUPPORTING_TEXT.PASSWORD_CHECKER);

      passwordCheckerError = true;
    }

    if (info.password !== info.passwordChecker) {
      setErrors({
        ...error,
        passwordChecker: SUPPORTING_TEXT.PASSWORD_NO_EQUAL,
      });

      passwordCheckerError = true;
    }

    !passwordError && setValidMessage((prev) => ({ ...prev, password: SUPPORTING_TEXT.PASSWORD_VALID }));
    !passwordCheckerError && setValidMessage((prev) => ({ ...prev, passwordChecker: SUPPORTING_TEXT.PASSWORD_EQUAL }));

    return !passwordError;
  }, [error, info, setErrors, updateFieldError]);

  const validateForm = useCallback(() => {
    let isFormError = false;

    Object.entries(info).some(([key, value]) => {
      /** 이름 유효성 검사 */
      if (key === 'name') {
        if (value === '') {
          updateFieldError(key, IS_EMPTY_STRING.name);
        }
      }

      /** 비밀번호 유효성 검사 */

      if (!validatePassword()) {
        isFormError = true;
        return true;
      }

      return false;
    });

    return !isFormError;
  }, [info, updateFieldError, validatePassword]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    const prevStepData = JSON.parse(sessionStorage.getItem('step1')!);

    const formData = {
      ...prevStepData,
      ...info,
    };

    mutate(formData);
  };

  const handlePasswordBlur = () => {
    if (info.password !== '' && !PASSWORD_VALID_FORMAT.test(info.password)) {
      updateFieldError('password', SUPPORTING_TEXT.PASSWORD_INVALID);
    } else if (info.password !== '' && PASSWORD_VALID_FORMAT.test(info.password)) {
      setValidMessage((prev) => ({
        ...prev,
        password: SUPPORTING_TEXT.PASSWORD_VALID,
      }));
    }
  };

  const handlePasswordCheckerBlur = () => {
    if (info.passwordChecker !== '' && info.password !== info.passwordChecker) {
      updateFieldError('passwordChecker', SUPPORTING_TEXT.PASSWORD_NO_EQUAL);
    } else if (info.passwordChecker !== '' && info.password === info.passwordChecker) {
      setValidMessage((prev) => ({
        ...prev,
        passwordChecker: SUPPORTING_TEXT.PASSWORD_EQUAL,
      }));
    }
  };

  return {
    info,
    handleInfoChange,
    handleBirthChange,
    handlePasswordBlur,
    handlePasswordCheckerBlur,
    handleSubmit,
    validMessage,
    error,
  };
};
