import { useCallback, useEffect, useRef } from 'react';

type Callback = () => void;

export const useOutsideClick = <T extends HTMLElement = HTMLDivElement>(onClose: Callback, componentName?: string) => {
  const ref = useRef<T>(null);

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (!ref.current || !(event.target instanceof HTMLElement)) return;

      const isOutSide = !ref.current.contains(event.target as Node);

      if (componentName) {
        if (isOutSide && !event.target?.className.includes(componentName)) {
          onClose?.();
        }
      } else {
        if (isOutSide) {
          onClose?.();
        }
      }
    },
    [onClose, componentName]
  );

  const handleEscKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!ref.current) return;

      if (e.key === 'Escape') {
        onClose?.();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    window.addEventListener('keydown', handleEscKeyDown);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('keydown', handleEscKeyDown);
    };
  }, [onClose, handleEscKeyDown, handleOutsideClick]);

  return ref;
};
