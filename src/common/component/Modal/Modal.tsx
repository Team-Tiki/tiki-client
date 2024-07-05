import { ReactElement } from 'react';
import ReactDOM from 'react-dom';

import { ModalContent, ModalWrapper } from '@/common/component/Modal/Modal.style';

interface ModalProps {
  isOpen: boolean;
  component: ReactElement | null;
}

const Modal = ({ isOpen, component }: ModalProps) => {
  return isOpen && component
    ? ReactDOM.createPortal(
        <div css={ModalWrapper}>
          <div css={ModalContent}>{component}</div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
