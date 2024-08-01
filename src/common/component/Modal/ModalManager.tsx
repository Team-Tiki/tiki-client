import Modal from '@/common/component/Modal/Modal';

import { useModalStore } from '@/shared/store/modal';

const ModalManager = () => {
  const { isOpen, content, closeModal } = useModalStore();

  if (!isOpen || !content) return null;

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      {content}
    </Modal>
  );
};

export default ModalManager;
