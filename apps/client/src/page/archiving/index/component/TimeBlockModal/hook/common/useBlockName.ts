import { useCallback, useState } from 'react';

interface UseBlockNameProps {
  maxLength?: number;
  onChange?: (name: string) => void;
}

export const useBlockName = ({ maxLength = 25, onChange }: UseBlockNameProps) => {
  const [blockName, setBlockName] = useState('');
  const [isNameError, setIsNameError] = useState(false);

  const handleBlockNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > maxLength) {
      setIsNameError(true);
      return;
    }

    setBlockName(e.target.value);
    setIsNameError(false);
    onChange?.(e.target.value);
  }, []);

  return {
    blockName,
    isNameError,
    handleBlockNameChange,
  };
};
