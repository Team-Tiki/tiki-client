import { useEffect, useState } from 'react';

const useDebounce = <T extends string>(value: T, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const delayDebounceTimer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(delayDebounceTimer);
    };
  }, [value, delay]);
  return debouncedValue;
};

export default useDebounce;
