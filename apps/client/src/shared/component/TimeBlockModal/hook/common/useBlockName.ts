import { useCallback, useState } from 'react';

import { useBlockContext } from '@/shared/hook/common/useBlockContext';

interface UseBlockNameProps {
  maxLength?: number;
  onChange?: (name: string) => void;
}

export const useBlockName = ({ maxLength = 25, onChange }: UseBlockNameProps) => {
  const { formData } = useBlockContext();

  const [blockName, setBlockName] = useState(formData.name ?? '');
  const [isNameError, setIsNameError] = useState(false);

  const handleBlockNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length > maxLength) {
        setIsNameError(true);
        return;
      }

      setBlockName(e.target.value);
      setIsNameError(false);
      onChange?.(e.target.value);
    },
    [maxLength, onChange]
  );

  return {
    blockName,
    isNameError,
    handleBlockNameChange,
  };
};
