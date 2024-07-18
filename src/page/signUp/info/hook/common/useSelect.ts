import { useCallback, useState } from 'react';

export const useSelect = <T>(initialValue: T) => {
  const [selectedItem, setSelectedItem] = useState<T>(initialValue);
  const [error, setError] = useState(false);

  const onSelect = useCallback((item: T) => {
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
