import { ModalContent, ModalWrapper } from '@/common/component/Modal/Modal.style';
import Portal from '@/common/component/Modal/ModalPortal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div css={ModalWrapper}>
        <div css={ModalContent}>{children}</div>
      </div>
    </Portal>
  );
};

export default Modal;
