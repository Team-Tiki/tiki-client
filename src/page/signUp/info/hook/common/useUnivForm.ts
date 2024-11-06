import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useOverlay } from '@/common/hook';

import { PATH } from '@/shared/constant/path';

type UnivForm = {
  email: string;
  code: string;
};

export const useUnivForm = () => {
  const { isOpen: isSelectOpen, open: selectOpen, close: selectClose, toggle: selectToggle } = useOverlay();

  const [inputs, setInputs] = useState<UnivForm>({} as UnivForm);

  /** TODO: 추후 인증 api 결과값으로 대체 */
  const [isVerfied, setIsVerified] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>, key: keyof UnivForm) => {
    setInputs((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(PATH.SIGNUP_INFO);
  };

  return {
    inputs,
    isVerfied,
    setIsVerified, // 추후 삭제
    handleChange,
    handleSubmit,
    isSelectOpen,
    selectClose,
    selectOpen,
    selectToggle,
  };
};
