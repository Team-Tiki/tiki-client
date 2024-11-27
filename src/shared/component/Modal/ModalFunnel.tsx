import { Modal } from '@/common/component/Modal';

import { BlockFlow } from '@/page/archiving/index/component/TimeBlockModal';

import ActivityTagModal from '@/shared/component/ActivityTagModal/ActivityTagModal';
import DeletedModal from '@/shared/component/DeleteModal/DeletedModal';
import InviteModal from '@/shared/component/InviteModal/InviteModal';
import MemberTagModal from '@/shared/component/MemberTagModal/MemberTagModal';
import { WorkSpaceFlow } from '@/shared/component/WorkSpaceModal/index';
import { FunnelProvider } from '@/shared/hook/common/funnelContext';
import { BlockProvider } from '@/shared/hook/common/useBlockContext';
import { WorkSpaceProvider } from '@/shared/hook/common/useWorkSpaceContext';
import { useCloseModal, useModalContentType, useModalIsOpen } from '@/shared/store/modal';
import { FunnelStep } from '@/shared/util/funnelStep';

const ModalFunnel = () => {
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
        return (
          <FunnelStep step={1}>
            <DeletedModal />
          </FunnelStep>
        );
      case 'invite':
        return (
          <FunnelStep step={1}>
            <InviteModal />
          </FunnelStep>
        );
      case 'member-tag':
        return (
          <FunnelStep step={1}>
            <MemberTagModal />
          </FunnelStep>
        );
      case 'activity-tag':
        return (
          <FunnelStep step={1}>
            <ActivityTagModal />
          </FunnelStep>
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <FunnelProvider>{renderContent()}</FunnelProvider>
    </Modal>
  );
};

export default ModalFunnel;
