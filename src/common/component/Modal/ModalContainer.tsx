import Modal from '@/common/component/Modal/Modal';

import { BlockProvider } from '@/shared/hook/common/useBlockContext';
import { WorkSpaceProvider } from '@/shared/hook/common/useWorkSpaceContext';
import { useCloseModal, useModalContent, useModalIsOpen } from '@/shared/store/modal';

const ModalContainer = () => {
  const isOpen = useModalIsOpen();
  const content = useModalContent();
  const closeModal = useCloseModal();

  if (!isOpen || !content) return null;

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <WorkSpaceProvider>
        <BlockProvider>{content}</BlockProvider>
      </WorkSpaceProvider>
    </Modal>
  );
};

export default ModalContainer;
