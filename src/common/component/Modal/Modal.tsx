import { ReactElement, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { ModalContent, ModalWrapper } from '@/common/component/Modal/Modal.style';

interface ModalProps {
  isOpen: boolean;
  component: ReactElement | null;
}

const Modal = ({ isOpen, component }: ModalProps) => {
  // 모달이 열렸을 때 스크롤을 막기
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    isOpen &&
    component &&
    ReactDOM.createPortal(
      <article css={ModalWrapper}>
        <div css={ModalContent}>{component}</div>
      </article>,
      document.body
    )
  );
};

export default Modal;
