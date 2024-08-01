/*import Modal from '@/common/component/Modal/Modal';

import { useModalComponent, useModalStore, useResetStep, useToggleModal } from '@/shared/store/modal';
import { ModalType } from '@/shared/type/block';

interface ModalManagerProps {
  onClose?: () => void;
}

export const ModalManager = ({ onClose }: ModalManagerProps) => {
  const modals = useModalStore((state) => state.modals);
  const activeModalType = Object.keys(modals).find((key) => modals[key as ModalType]) as ModalType | undefined;
  const toggleModal = useToggleModal();
  const resetStep = useResetStep();
  const ModalContent = useModalComponent();

  const handleClose = () => {
    if (activeModalType) {
      toggleModal(activeModalType);
      resetStep();
      if (onClose) onClose();
    }
  };

  if (!activeModalType) return null;

  return activeModalType ? (
    <Modal isOpen={true} onClose={handleClose}>
      {ModalContent}
    </Modal>
  ) : null;


};*/
