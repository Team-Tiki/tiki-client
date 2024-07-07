import { ReactElement, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { backgroundStyle, dialogStyle } from '@/common/component/Modal/Modal.style';
import { useOutsideClick } from '@/common/hook';

interface ModalProps {
  isOpen: boolean;
  children?: ReactElement;
  onClose: () => void;
}

const Modal = ({ isOpen, children, onClose }: ModalProps) => {
  const ref = useOutsideClick<HTMLDialogElement>(onClose);

  // 모달이 열렸을 때 스크롤을 막기
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

  return (
    isOpen &&
    ReactDOM.createPortal(
      <>
        <article css={backgroundStyle} />
        <dialog css={dialogStyle} ref={ref}>
          {children}
        </dialog>
      </>,
      document.body
    )
  );
};

export default Modal;
