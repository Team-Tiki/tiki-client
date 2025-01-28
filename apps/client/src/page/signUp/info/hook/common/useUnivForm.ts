import { ChangeEvent, useState } from 'react';

type UnivForm = {
  email: string;
  code: string;
};

export const useUnivForm = () => {
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
  };

  return {
    inputs,
    handleChange,
    select,
    selectedUniv,
  };
};
