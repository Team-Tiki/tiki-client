import { Modal } from '@tiki/ui';

import { Suspense } from 'react';

import { BlockFlow } from '@/page/archiving/index/component/TimeBlockModal';

import ActivityTagModal from '@/shared/component/ActivityTagModal/ActivityTagModal';
import DeletedModal from '@/shared/component/DeletedModal/DeletedModal';
import MemberTagModal from '@/shared/component/MemberTagModal/MemberTagModal';
import { WorkSpaceFlow } from '@/shared/component/WorkSpaceModal/index';
import { BlockProvider } from '@/shared/hook/common/useBlockContext';
import { FunnelProvider } from '@/shared/hook/common/useFunnel';
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
          <Suspense>
            <WorkSpaceProvider>
              <WorkSpaceFlow />
            </WorkSpaceProvider>
          </Suspense>
        );
      case 'create-block':
        return (
          <Suspense>
            <BlockProvider>
              <BlockFlow />
            </BlockProvider>
          </Suspense>
        );
      case 'deleted':
        return (
          <Suspense>
            <FunnelStep step={1}>
              <DeletedModal />
            </FunnelStep>
          </Suspense>
        );

      case 'member-tag':
        return (
          <Suspense>
            <FunnelStep step={1}>
              <MemberTagModal />
            </FunnelStep>
          </Suspense>
        );
      case 'activity-tag':
        return (
          <Suspense>
            <FunnelStep step={1}>
              <ActivityTagModal />
            </FunnelStep>
          </Suspense>
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
