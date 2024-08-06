import Modal from '@/common/component/Modal/Modal';

import { BlockProvider } from '@/shared/hook/common/useBlockContext';
import { WorkSpaceProvider } from '@/shared/hook/common/useWorkSpaceContext';
import { useModalStore } from '@/shared/store/modal';

const ModalContainer = () => {
  const { isOpen, content, closeModal } = useModalStore();

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
