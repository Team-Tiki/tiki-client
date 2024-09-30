import { BlockFlow } from '@/page/archiving/index/component/TimeBlockModal';

import Modal from '@/common/component/Modal/Modal';

import DeleteModal from '@/shared/component/DeleteModal/DeleteModal';
import { BlockProvider } from '@/shared/component/Modal/hook/useBlockContext';
import { WorkSpaceProvider } from '@/shared/component/Modal/hook/useWorkSpaceContext';
import { useCloseModal, useModalContentType, useModalIsOpen } from '@/shared/component/Modal/store/modal';
import { WorkSpaceFlow } from '@/shared/component/WorkSpaceModal';

const ModalContainer = () => {
  const isOpen = useModalIsOpen();
  const contentType = useModalContentType();
  const closeModal = useCloseModal();

  const renderContent = () => {
    switch (contentType) {
      case 'create-workspace':
        return (
          <WorkSpaceProvider>
            <WorkSpaceFlow />
          </WorkSpaceProvider>
        );
      case 'create-block':
        return (
          <BlockProvider>
            <BlockFlow />
          </BlockProvider>
        );
      case 'delete':
        return <DeleteModal />;
      default:
        return null;
    }
  };

  if (!isOpen || !contentType) return null;

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      {renderContent()}
    </Modal>
  );
};

export default ModalContainer;
