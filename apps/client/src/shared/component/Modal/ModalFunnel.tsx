import { Modal } from '@tiki/ui';

import { Suspense } from 'react';

import ActivityTagModal from '@/shared/component/ActivityTagModal/ActivityTagModal';
import CautionModal from '@/shared/component/CautionModal/CautionModal';
import DeletedModal from '@/shared/component/DeletedModal/DeletedModal';
import FileImportModal from '@/shared/component/FileImportModal/FileImportModal';
import ImageImportModal from '@/shared/component/ImageImportModal/ImageImportModal';
import InviteModal from '@/shared/component/InviteModal/InviteModal';
import LeaveModal from '@/shared/component/LeaveModal/LeaveModal';
import NewFileUploadModal from '@/shared/component/NewFileUploadModal/NewFileUploadModal';
import { BlockFlow } from '@/shared/component/TimeBlockModal';
import { WorkSpaceFlow } from '@/shared/component/WorkSpaceModal/index';
import { BlockProvider } from '@/shared/hook/common/useBlockContext';
import { FunnelProvider } from '@/shared/hook/common/useFunnel';
import { TimeBlockFileUploadFlow } from '@/shared/hook/common/useTimeBlockUploadFlow';
import { WorkSpaceProvider } from '@/shared/hook/common/useWorkSpaceContext';
import {
  isCautionModalData,
  useCloseModal,
  useModalContentType,
  useModalData,
  useModalIsOpen,
} from '@/shared/store/modal';

const ModalFunnel = () => {
  const isOpen = useModalIsOpen();
  const closeModal = useCloseModal();

  const contentType = useModalContentType();
  const modalData = useModalData();

  if (!isOpen) return null;

  if (contentType === 'deleted') {
    return <DeletedModal />;
  }

  if (contentType === 'leave') {
    return <LeaveModal />;
  }

  if (contentType === 'new-file') {
    return <NewFileUploadModal />;
  }

  if (contentType === 'timeblock-file') {
    return (
      <FunnelProvider>
        <TimeBlockFileUploadFlow />
      </FunnelProvider>
    );
  }

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
          <BlockProvider>
            <BlockFlow />
          </BlockProvider>
        );
      case 'invite':
        return <InviteModal />;
      case 'activity-tag':
        return (
          <Suspense>
            <ActivityTagModal />
          </Suspense>
        );
      case 'file':
        return <FileImportModal />;
      case 'image':
        return <ImageImportModal />;
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
      <FunnelProvider>{renderContent()}</FunnelProvider>
    </Modal>
  );
};

export default ModalFunnel;
