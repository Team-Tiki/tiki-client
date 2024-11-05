import { ChangeEvent, useState } from 'react';

import { useOverlay } from '@/common/hook';

type UnivForm = {
  email: string;
  code: string;
};

export const useUnivForm = () => {
  const { isOpen: isSelectOpen, open: selectOpen, close: selectClose, toggle: selectToggle } = useOverlay();

  const [inputs, setInputs] = useState<UnivForm>({} as UnivForm);

  /** TODO: 추후 인증 api 결과값으로 대체 */
  const [isVerfied, setIsVerified] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, key: keyof UnivForm) => {
    setInputs((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  return {
    inputs,
    isVerfied,
    setIsVerified,
    handleChange,
    isSelectOpen,
    selectClose,
    selectOpen,
    selectToggle,
  };
};
