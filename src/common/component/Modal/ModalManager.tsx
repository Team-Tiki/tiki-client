import Modal from '@/common/component/Modal/Modal';

import { useModalStore } from '@/shared/store/modal';
import { BlockFlow, BlockProvider } from '@/shared/store/useBlockContext';
import { WorkSpaceFlow, WorkSpaceProvider } from '@/shared/store/useWorkSpaceContext';

const ModalManager = () => {
  const { isOpen, content, closeModal, id } = useModalStore();

  if (!isOpen || !content) return null;

  let ModalContent;

  switch (id) {
    case 'workspace':
      ModalContent = (
        <WorkSpaceProvider>
          <WorkSpaceFlow />
        </WorkSpaceProvider>
      );
      break;
    case 'block':
      ModalContent = (
        <BlockProvider>
          <BlockFlow />
        </BlockProvider>
      );
      break;
    default:
      return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      {content}
    </Modal>
  );
};

export default ModalManager;
