import { useCallback, useEffect, useState } from 'react';

export const useSelect = (onClose: () => void) => {
  const [selectedItem, setSelectedItem] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    onClose?.();
  }, [selectedItem, onClose]);

  const onSelect = useCallback((item: string) => {
    setSelectedItem(item);
  }, []);

  const onValidate = useCallback(() => {
    if (!selectedItem) {
      setError(true);
      return false;
    }
    return true;
  }, [selectedItem]);

  const onReset = useCallback(() => {
    setError(false);
  }, []);

  return { selectedItem, onSelect, error, onValidate, onReset };
};
