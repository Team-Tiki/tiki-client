/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactElement, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { backgroundStyle, dialogStyle } from '@/common/component/Modal/Modal.style';

interface ModalProps {
  isOpen: boolean;
  children?: ReactElement;
  onClose?: () => void;
}

const Modal = ({ isOpen, children, onClose }: ModalProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.maxWidth = `${document.body.clientWidth}px`;
      window.addEventListener('keypress', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.maxWidth = '100vw';
      window.removeEventListener('keypress', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    isOpen &&
    createPortal(
      <>
        <div onClick={() => onClose?.()} css={backgroundStyle} />
        <dialog css={dialogStyle}>{children}</dialog>
      </>,
      document.body
    )
  );
};

export default Modal;
