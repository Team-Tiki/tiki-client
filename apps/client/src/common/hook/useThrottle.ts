import { useEffect, useRef } from 'react';

import { Timeout } from '@/shared/type/time';

export const useThrottle = () => {
  const ref = useRef(false);
  const timeoutRef = useRef<Timeout>();

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const throttledCallback = (callback: (params?: unknown) => void, delay: number) => {
    if (ref.current) return;

    ref.current = true;

    callback();

    timeoutRef.current = setTimeout(() => {
      ref.current = false;
    }, delay);
  };

  return throttledCallback;
};
