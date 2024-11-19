import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

import { useError } from '@/common/hook';

import { getFormatDateString, getFormatNumberString, isValidDate } from '@/page/signUp/info/util/date';

import { UserInfo } from '@/shared/api/signup/info/type';
import {
  DATE_MAXLENGTH,
  FORMATTED_DATE_MAXLENGTH,
  PASSWORD_VALID_FORMAT,
  SUPPORTING_TEXT,
} from '@/shared/constant/form';
import { hasKeyInObject } from '@/shared/util/typeGuard';

export type InfoFormData = Omit<UserInfo, 'univ' | 'email'>;

const IS_EMPTY_STRING = {
  name: SUPPORTING_TEXT.NAME,
  birth: SUPPORTING_TEXT.BIRTH,
  password: SUPPORTING_TEXT.PASSWORD,
  passwordChecker: SUPPORTING_TEXT.PASSWORD_CHECKER,
} as const;

export const useInfoForm = () => {
  const [info, setInfo] = useState<InfoFormData>({ name: '', birth: '', password: '', passwordChecker: '' });

  const { error, updateFieldError, clearFieldError, setErrors } = useError<InfoFormData>({
    name: '',
    birth: '',
    password: '',
    passwordChecker: '',
  });

  /**
   * TODD: 추후 UnivForm 로직에서 재사용
   * const { mutate: verityCodeMutate, isSuccess: isVerified } = useVerifyCodeMutation(info.email, info.authCode);
   */

  const handleInfoChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value, name: key } = e.target;

      setInfo((prev) => ({
        ...prev,
        [key]: value,
      }));
      if (value !== '' && hasKeyInObject(error, key)) {
        clearFieldError(key);
      }
    },
    [clearFieldError, error]
  );

  const handleBirthChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      let { value } = e.target;

      if (info.birth !== '') {
        clearFieldError('birth');
      }

      if (value.length === DATE_MAXLENGTH && info.birth.length === FORMATTED_DATE_MAXLENGTH) {
        value = info.birth.replace(/-/g, '');
      } else {
        value = getFormatDateString(getFormatNumberString(value, DATE_MAXLENGTH));
      }

      setInfo((prev) => ({
        ...prev,
        birth: value,
      }));
    },
    [info.birth, clearFieldError]
  );

  const validateDate = useCallback(() => {
    if (info.birth === '' || !isValidDate(info.birth)) {
      updateFieldError('birth', 'error');
      return false;
    }

    return true;
  }, [info.birth, updateFieldError]);

  const validatePassword = useCallback(() => {
    if (info.password === '') {
      updateFieldError('password', SUPPORTING_TEXT.PASSWORD);

      return false;
    }

    if (info.passwordChecker === '') {
      updateFieldError('passwordChecker', SUPPORTING_TEXT.PASSWORD_CHECKER);

      return false;
    }

    if (info.password !== info.passwordChecker) {
      setErrors({
        ...error,
        password: SUPPORTING_TEXT.PASSWORD_NO_EQUAL,
        passwordChecker: SUPPORTING_TEXT.PASSWORD_NO_EQUAL,
      });

      return false;
    }

    if (!PASSWORD_VALID_FORMAT.test(info.password)) {
      updateFieldError('password', SUPPORTING_TEXT.PASSWORD_INVALID);

      return false;
    }

    return true;
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

      /** 생일 유효성 검사 */
      if (key === 'birth') {
        if (!validateDate()) {
          isFormError = true;
          return true;
        }
      }
      /** 비밀번호 유효성 검사 */

      if (!validatePassword()) {
        isFormError = true;
        return true;
      }
    });

    return !isFormError;
  }, [info, validateDate, updateFieldError, validatePassword]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;
  };

  return {
    info,
    handleInfoChange,
    handleBirthChange,
    handleSubmit,
    error,
  };
};
