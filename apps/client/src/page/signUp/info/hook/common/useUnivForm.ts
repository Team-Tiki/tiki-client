import { useOverlay } from '@tiki/utils';

import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PATH } from '@/shared/constant/path';

type UnivForm = {
  email: string;
  code: string;
};

export const useUnivForm = () => {
  const { isOpen: isSelectOpen, open: selectOpen, close: selectClose, toggle: selectToggle } = useOverlay();

  const [inputs, setInputs] = useState<UnivForm>({} as UnivForm);
  const [selectedUniv, setSelectedUniv] = useState('');

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>, key: keyof UnivForm) => {
    setInputs((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const select = (value: string) => {
    setSelectedUniv(value);

    selectClose();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(PATH.SIGNUP_INFO);
  };

  return {
    inputs,
    handleChange,
    handleSubmit,
    isSelectOpen,
    select,
    selectedUniv,
    selectClose,
    selectOpen,
    selectToggle,
  };
};
