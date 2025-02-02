import { Flex } from '@tiki/ui';

import { useRef, useState } from 'react';

import { components } from '@/shared/__generated__/schema';
import { $api } from '@/shared/api/client';
import { Modal } from '@/shared/component/Modal';
import NewFileImportModal from '@/shared/component/NewFileImportModal/NewFileImportModal';
import BrowseFile from '@/shared/component/TimeBlockModal/component/UploadModal/BrowseFile/BrowseFile';
import { flexStyle } from '@/shared/component/TimeBlockModal/component/UploadModal/UploadModal.style';
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
  const selectedFilesRef = useRef<DocumentDetail[]>(selectedFiles);

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
    const combinedFiles = [...selectedFilesRef.current, ...selected].filter(
      (file, index, self) => index === self.findIndex((f) => f.documentId === file.documentId)
    );

    setSelectedFiles(combinedFiles);
    selectedFilesRef.current = combinedFiles;

    onConfirmFile(combinedFiles);
  };

  const handleSelectedFilesChange = (updatedFiles: DocumentDetail[]) => {
    setSelectedFiles(updatedFiles);
    selectedFilesRef.current = updatedFiles;
  };

  const handleNext = () => {
    const documentIds = selectedFilesRef.current.map((file) => file.documentId);

    setFormData({
      documentIds,
    });

    onConfirmFile(selectedFilesRef.current);
    nextStep();
  };

  return (
    <Modal size="large" isOpen={isOpen} onClose={closeModal}>
      <Modal.Header step={3} />
      <Modal.Body>
        <Flex css={flexStyle}>
          {fileData?.data?.documents.length === 0 || isAddingFiles ? (
            <NewFileImportModal
              onUploadFile={handleFileSelect}
              selectedFiles={selectedFiles}
              size="large"
              contentType="create-block"
              onNext={handleNext}
              onPrev={() => setIsAddingFiles(false)}
            />
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
      <Modal.Footer step={2} contentType="create-block" buttonClick={handleNext} prevStep={() => prevStep()} />
    </Modal>
  );
};

export default UploadModal;
