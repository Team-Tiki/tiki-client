import { useCallback, useState } from 'react';

import { MAX_TIMEBLOCK_LENGTH } from '@/shared/component/TimeBlockModal/constant/error';
import { useBlockContext } from '@/shared/hook/common/useBlockContext';

interface UseBlockNameProps {
  maxLength?: number;
  onChange?: (name: string) => void;
}

export const useBlockName = ({ maxLength = MAX_TIMEBLOCK_LENGTH, onChange }: UseBlockNameProps) => {
  const { formData } = useBlockContext();

  const [blockName, setBlockName] = useState(formData.name ?? '');
  const [isNameError, setIsNameError] = useState(false);

  const handleBlockNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const name = e.target.value;

      if (name.length > maxLength) {
        setIsNameError(true);
        return;
      }

      setBlockName(name);
      setIsNameError(false);
      onChange?.(name);
    },
    [maxLength, onChange]
  );

  const handleBlockNameBlur = useCallback(() => {
    const isNameMaxLengthError = blockName.length > maxLength;

    setIsNameError(isNameMaxLengthError);
  }, [blockName, maxLength]);

  return {
    blockName,
    isNameError,
    handleBlockNameChange,
    handleBlockNameBlur,
  };
};
