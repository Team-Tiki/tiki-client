import { useEffect } from 'react';

const usePreventGoBack = (isOpen: boolean, onClose: () => void) => {
  useEffect(() => {
    const preventGoBack = () => {
      history.go(1);
      onClose();
    };

    if (isOpen) {
      history.pushState(null, '', location.href);
      window.addEventListener('popstate', preventGoBack);
    }

    return () => window.removeEventListener('popstate', preventGoBack);
  }, [isOpen, onClose]);
};

export default usePreventGoBack;
