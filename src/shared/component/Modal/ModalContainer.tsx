import { Modal } from '@/common/component/Modal';

import { BlockFlow } from '@/page/archiving/index/component/TimeBlockModal';

import ActivityTagModal from '@/shared/component/ActivityTagModal/ActivityTagModal';
import DeletedModal from '@/shared/component/DeleteModal/DeletedModal';
import InviteModal from '@/shared/component/InviteModal/InviteModal';
import MemberTagModal from '@/shared/component/MemberTagModal/MemberTagModal';
import { WorkSpaceFlow } from '@/shared/component/WorkSpaceModal';
import { BlockProvider } from '@/shared/hook/common/useBlockContext';
import { WorkSpaceProvider } from '@/shared/hook/common/useWorkSpaceContext';
import { useCloseModal, useModalContentType, useModalIsOpen } from '@/shared/store/modal';

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
      case 'deleted':
        return <DeletedModal />;
      case 'invite':
        return <InviteModal />;
      case 'member-tag':
        return <MemberTagModal />;
      case 'activity-tag':
        return <ActivityTagModal />;
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
