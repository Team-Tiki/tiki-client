import { Modal } from '@tiki/ui';

import { Suspense } from 'react';

import { BlockFlow } from '@/page/archiving/index/component/TimeBlockModal';

import ActivityTagModal from '@/shared/component/ActivityTagModal/ActivityTagModal';
import CautionModal from '@/shared/component/CautionModal/CautionModal';
import DeletedModal from '@/shared/component/DeletedModal/DeletedModal';
import InviteModal from '@/shared/component/InviteModal/InviteModal';
import MemberTagModal from '@/shared/component/MemberTagModal/MemberTagModal';
import { WorkSpaceFlow } from '@/shared/component/WorkSpaceModal/index';
import { BlockProvider } from '@/shared/hook/common/useBlockContext';
import { FunnelProvider } from '@/shared/hook/common/useFunnel';
import { WorkSpaceProvider } from '@/shared/hook/common/useWorkSpaceContext';
import {
  isCautionModalData,
  useCloseModal,
  useModalContentType,
  useModalData,
  useModalIsOpen,
} from '@/shared/store/modal';
import { FunnelStep } from '@/shared/util/funnelStep';

const ModalFunnel = () => {
  const isOpen = useModalIsOpen();
  const closeModal = useCloseModal();
  
  const contentType = useModalContentType();
  const modalData = useModalData();
  
  if (!isOpen) return null;

  if (contentType === 'deleted') {
    return (
      <Suspense>
        <DeletedModal />
      </Suspense>
    );
  }

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
      case 'invite':
        return (
          <FunnelStep step={1}>
            <InviteModal step={1} />
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
      case 'caution':
        if (isCautionModalData(modalData)) {
          return (
            <CautionModal
              infoText={modalData?.infoText || ''}
              content={modalData?.content || ''}
              desc={modalData?.desc || ''}
              footerType={modalData?.footerType || 'caution'}
              onClick={modalData?.onClick || (() => {})}
              onClose={modalData?.onClose}
            />
          );
        }
        break;
      default:
        return null;
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <Suspense>
        <FunnelProvider>{renderContent()}</FunnelProvider>
      </Suspense>
    </Modal>
  );
};

export default ModalFunnel;
