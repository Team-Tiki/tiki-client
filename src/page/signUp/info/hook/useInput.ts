import { ChangeEvent, useState } from 'react';

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | undefined>(undefined);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (newValue !== '') {
      setError(undefined);
    }
  };

  const onValidate = (errorMessage: string, isError: boolean = false) => {
    if (value === '' || isError) {
      setError(errorMessage);
      return false;
    }
    return true;
  };

  return {
    value,
    onChange,
    error,
    onValidate,
  };
};
