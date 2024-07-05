import ReactDOM from 'react-dom';

import { ModalContent, ModalWrapper } from '@/common/component/Modal/Modal.style';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div css={ModalWrapper}>
      <div css={ModalContent}>{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
