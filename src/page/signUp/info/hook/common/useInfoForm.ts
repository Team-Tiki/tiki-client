import { getFormatDateString, getFormatNumberString, isValidDate } from '@/page/signUp/info/util/date';

import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useOverlay } from '@/common/hook';

import { UserInfo } from '@/shared/api/signup/info/type';
import { DATE_MAXLENGTH, FORMATTED_DATE_MAXLENGTH, SUPPORTING_TEXT } from '@/shared/constant/form';
import { PATH } from '@/shared/constant/path';
import { useVerifyCodeMutation } from '@/shared/hook/api/useVerifyCodeMutation';
import { useToastStore } from '@/shared/store/toast';

export type InfoFormData = Omit<UserInfo, 'password' | 'passwordChecker'>;

type InfoFormUserInput = InfoFormData & {
  authCode: string;
};

type InfoError = Partial<InfoFormUserInput>;

const IS_EMPTY_STRING = {
  name: SUPPORTING_TEXT.NAME,
  birth: SUPPORTING_TEXT.BIRTH,
  univ: SUPPORTING_TEXT.UNIV,
  email: SUPPORTING_TEXT.EMAIL,
  authCode: SUPPORTING_TEXT.EMAIL_NOAUTH,
} as const;

export const useInfoForm = () => {
  const [info, setInfo] = useState<InfoFormUserInput>({ name: '', birth: '', univ: '', email: '', authCode: '' });
  const [error, setError] = useState<InfoError>({ name: '', birth: '', univ: '', email: '', authCode: '' });

  const { isOpen: isSelectOpen, open: onSelectOpen, close: onSelectClose, toggle: onSelectToggle } = useOverlay();

  const { mutate: validateAuthCode, isSuccess: isAuthCodeValidated } = useVerifyCodeMutation(info.email, info.authCode);

  const { createToast } = useToastStore();

  const navigate = useNavigate();

  useEffect(() => {
    setError((prev) => ({ ...prev, univ: undefined }));

    onSelectClose();
  }, [info.univ, onSelectClose]);

  const handleInfoChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value, name: key } = e.target;

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
  }, []);

  const handleBirthChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      let { value } = e.target;

      if (info.birth !== '') setError((prev) => ({ ...prev, birth: '' }));

      if (value.length === DATE_MAXLENGTH && info.birth.length === FORMATTED_DATE_MAXLENGTH) {
        value = info.birth.replace(/-/g, '');
      } else {
        value = getFormatDateString(getFormatNumberString(value, 8));
      }

      setInfo((prev) => ({
        ...prev,
        birth: value,
      }));
    },
    [info.birth]
  );

  const handleUnivSelect = useCallback((item: string) => {
    setInfo((prev) => ({
      ...prev,
      univ: item,
    }));
  }, []);

  const validateDate = useCallback(() => {
    if (info.birth === '' || !isValidDate(info.birth)) {
      setError((prev) => ({ ...prev, birth: 'error' }));
      return false;
    }

    return true;
  }, [info.birth]);

  const validateForm = useCallback(() => {
    let isFormError = false;

    Object.entries(info).some(([key, value]) => {
      /** 생일 유효성 검사 */
      if (key === 'birth') {
        if (!validateDate()) {
          isFormError = true;
          return true;
        }
      }
      /** 선택된 대학교 검사 */
      if (key === 'univ' && value === '') {
        setError((prev) => ({
          ...prev,
          univ: 'error',
        }));
        isFormError = true;
        return true;
      }
      /** 나머지 info 유효성 검사 */
      if (value === '') {
        setError((prev) => ({
          ...prev,
          [key]: IS_EMPTY_STRING[key as keyof InfoFormUserInput],
        }));

        if (key === 'authCode') {
          createToast(SUPPORTING_TEXT.EMAIL_NOAUTH, 'error');
        }
        isFormError = true;
        return true;
      }
    });

    return !isFormError;
  }, [createToast, info, validateDate]);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!validateForm() || !isAuthCodeValidated) return;

      const formData: InfoFormData = {
        name: info.name,
        birth: info.birth,
        univ: info.univ,
        email: info.email,
      };

      navigate(PATH.SIGNUP_PASSWORD, {
        state: {
          formData,
        },
      });
    },
    [info, isAuthCodeValidated, navigate, validateForm]
  );

  return {
    info,
    handleInfoChange,
    handleBirthChange,
    handleUnivSelect,
    handleSubmit,
    validateAuthCode,
    isAuthCodeValidated,
    isSelectOpen,
    onSelectOpen,
    onSelectClose,
    onSelectToggle,
    error,
  };
};
