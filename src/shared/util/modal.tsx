import Modal from '@/common/component/Modal/Modal';

import { useModalComponent, useModalStore, useResetStep, useToggleModal } from '@/shared/store/modal';

interface ModalManagerProps {
  onClose?: () => void;
}
type ModalType = 'workspace' | 'category' | 'image' | 'complete' | 'block' | 'upload' | 'delete';
export const ModalManager = ({ onClose }: ModalManagerProps) => {
  const modals = useModalStore((state) => state.modals);
  const activeModalType = Object.keys(modals).find((key) => modals[key as ModalType]) as ModalType | undefined;
  const toggleModal = useToggleModal();
  const resetStep = useResetStep();
  const ModalContent = useModalComponent();

  console.log(ModalContent);

  const handleClose = () => {
    if (activeModalType) {
      toggleModal(activeModalType);
      resetStep(); // 모달이 닫힐 때 스텝 초기화
      if (onClose) onClose(); // onClose prop 호출
    }
  };

  return activeModalType ? (
    <Modal isOpen={true} onClose={handleClose}>
      {ModalContent}
    </Modal>
  ) : null;
};
