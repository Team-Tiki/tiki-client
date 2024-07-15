import { useCallback, useEffect, useRef } from 'react';

type Callback = () => void;

export const useOutsideClick = <T extends HTMLElement = HTMLDivElement>(onClose: Callback, componentName?: string) => {
  const ref = useRef<T>(null);

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (!ref.current) return;

      if (event.target instanceof HTMLElement) {
        if (componentName) {
          if (!ref.current.contains(event.target as Node) && !event.target?.className.includes(componentName)) {
            onClose?.();
          }
        } else {
          if (!ref.current.contains(event.target as Node)) {
            onClose?.();
          }
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
    window.addEventListener('keypress', handleEscKeyDown);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('keypress', handleEscKeyDown);
    };
  }, [onClose, handleEscKeyDown, handleOutsideClick]);

  return ref;
};
