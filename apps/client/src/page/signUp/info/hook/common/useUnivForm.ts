import { useOverlay } from '@tiki/utils';

import { ChangeEvent, useState } from 'react';

type UnivForm = {
  email: string;
  code: string;
};

export const useUnivForm = () => {
  const { isOpen: isSelectOpen, open: selectOpen, close: selectClose, toggle: selectToggle } = useOverlay();

  const [inputs, setInputs] = useState<UnivForm>({} as UnivForm);
  const [selectedUniv, setSelectedUniv] = useState('');

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

  return {
    inputs,
    handleChange,
    isSelectOpen,
    select,
    selectedUniv,
    selectClose,
    selectOpen,
    selectToggle,
  };
};
