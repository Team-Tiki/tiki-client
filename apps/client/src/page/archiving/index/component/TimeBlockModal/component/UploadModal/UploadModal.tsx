import { Flex } from '@tiki/ui';

import { useState } from 'react';

import AppendFile from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/AppendFile/AppendFile';
import BrowseFile from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/BrowseFile/BrowseFile';
import { flexStyle } from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/UploadModal.style';

import { components } from '@/shared/__generated__/schema';
import { $api } from '@/shared/api/client';
import { Modal } from '@/shared/component/Modal';
import { useBlockContext } from '@/shared/hook/common/useBlockContext';
import { useFunnel } from '@/shared/hook/common/useFunnel';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal, useModalIsOpen } from '@/shared/store/modal';

type DocumentDetail = components['schemas']['DocumentInfoGetResponse'];

interface UploadModalProps {
  onConfirmFile: (selectedFiles: DocumentDetail[]) => void;
}

const UploadModal = ({ onConfirmFile }: UploadModalProps) => {
  const [selectedFiles, setSelectedFiles] = useState<DocumentDetail[]>([]);
  const [isAddingFiles, setIsAddingFiles] = useState(false);

  const { prevStep, nextStep } = useFunnel();

  const isOpen = useModalIsOpen();
  const closeModal = useCloseModal();

  const { setFormData } = useBlockContext();

  const teamId = useInitializeTeamId();

  const { data: fileData } = $api.useQuery('get', '/api/v1/documents/team/{teamId}/timeline', {
    params: {
      query: {
        type: 'executive',
      },
      path: {
        teamId,
      },
    },
  });

  const handleFileSelect = (selected: DocumentDetail[]) => {
    setSelectedFiles((prev) => {
      const combinedFiles = prev.concat(selected);

      return combinedFiles.filter(
        (file, index) => index === combinedFiles.findIndex((f) => f.documentId === file.documentId)
      );
    });
  };

  const handleSelectedFilesChange = (updatedFiles: DocumentDetail[]) => {
    setSelectedFiles(updatedFiles);
  };

  const handleNext = () => {
    const documentIds = selectedFiles.map((file) => file.documentId);

    setFormData({
      documentIds,
    });

    onConfirmFile(selectedFiles);
    nextStep();
  };

  return (
    <Modal size="large" isOpen={isOpen} onClose={closeModal}>
      <Modal.Header step={2} />
      <Modal.Body>
        <Flex css={flexStyle}>
          {fileData?.data?.documents.length === 0 || isAddingFiles ? (
            <AppendFile onSelectFile={handleFileSelect} selectedFiles={selectedFiles} />
          ) : (
            <BrowseFile
              files={fileData?.data?.documents || []}
              selectedFiles={selectedFiles}
              onShowBlockAdd={() => setIsAddingFiles(true)}
              onUpdateSelection={handleSelectedFilesChange}
            />
          )}
        </Flex>
      </Modal.Body>
      <Modal.Footer step={3} contentType="create-block" buttonClick={handleNext} prevStep={() => prevStep()} />
    </Modal>
  );
};

export default UploadModal;
