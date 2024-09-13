import Modal from '@/common/component/Modal/Modal';

import DeleteModal from '@/shared/component/DeleteModal/DeleteModal';
import { BlockFlow } from '@/shared/component/ModalFlow/BlockFlow';
import { WorkSpaceFlow } from '@/shared/component/ModalFlow/WorkSpaceFlow';
import { BlockProvider } from '@/shared/hook/common/useBlockContext';
import { WorkSpaceProvider } from '@/shared/hook/common/useWorkSpaceContext';
import { useModalActions, useModalContentType, useModalIsOpen } from '@/shared/store/modal';

const ModalContainer = () => {
  const isOpen = useModalIsOpen();
  const contentType = useModalContentType();
  const { closeModal } = useModalActions();

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
      case 'delete': // delete 모달 케이스 추가
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
