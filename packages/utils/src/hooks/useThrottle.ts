import { useEffect, useRef } from "react";

type Timeout = ReturnType<typeof setTimeout>;

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
