import { useCallback, useEffect, useState } from 'react';

import Modal from '@/common/component/Modal/Modal';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 열기
  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  // 닫기
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // 스크롤 이벤트 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // 뒤로가기 이벤트 막기
  useEffect(() => {
    const preventGoBack = () => {
      history.go(1);
      closeModal();
    };

    if (isOpen) {
      history.pushState(null, '', location.href);
      window.addEventListener('popstate', preventGoBack);
    }

    return () => window.removeEventListener('popstate', preventGoBack);
  }, [isOpen, closeModal]);

  const ModalComponent = useCallback(
    ({ children }: { children: React.ReactNode }) => (
      <Modal isOpen={isOpen} onClose={closeModal}>
        {children}
      </Modal>
    ),
    [isOpen, closeModal]
  );

  return {
    Modal: ModalComponent,
    openModal,
    closeModal,
  };
};

export default useModal;
