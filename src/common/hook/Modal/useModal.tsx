import { ReactElement, useCallback, useState } from 'react';

import usePreventGoBack from '@/common/hook/usePreventGoBack';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState<ReactElement | undefined>(undefined);

  console.log('Modal', isOpen);
  // 열기
  const openModal = useCallback((content: ReactElement) => {
    setCurrentContent(content);
    setIsOpen(true);
  }, []);

  // 닫기
  const closeModal = useCallback(() => {
    setIsOpen(false);
    setCurrentContent(undefined);
  }, []);

  // 뒤로가기 이벤트 처리
  usePreventGoBack(isOpen, closeModal);

  return {
    isOpen,
    currentContent,
    setCurrentContent,
    openModal,
    closeModal,
  };
};

export default useModal;