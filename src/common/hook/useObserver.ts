import { useEffect, useRef } from 'react';

type ObserverOptions = IntersectionObserverInit;
type ObserverCallback = IntersectionObserverCallback;

export const useIntersectionObserver = <T extends HTMLElement>(
  onIntersect: ObserverCallback,
  { root, rootMargin, threshold }: ObserverOptions
) => {
  const targetRef = useRef<T>(null);

  useEffect(() => {
    if (!targetRef.current) return;

    const io = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });

    io.observe(targetRef.current);

    return () => io.disconnect();
  }, [root, rootMargin, threshold, onIntersect]);

  return { targetRef };
};
