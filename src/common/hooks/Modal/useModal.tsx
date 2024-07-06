import { ReactElement, useState } from 'react';

import usePreventGoBack from '@/common/hooks/Modal/usePreventGoBack';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState<ReactElement | null>(null);

  // 열기
  const openModal = (content: ReactElement) => {
    setCurrentContent(content);
    setIsOpen(true);
  };

  // 닫기
  const closeModal = () => {
    setIsOpen(false);
  };

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
