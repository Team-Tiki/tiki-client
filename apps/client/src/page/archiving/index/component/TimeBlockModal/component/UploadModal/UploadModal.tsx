import { Flex } from '@tiki/ui';

import { useState } from 'react';

import AppendFile from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/AppendFile/AppendFile';
import BrowseFile from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/Browse/BrowseFile';
import { flexStyle } from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/UploadModal.style';

import { components } from '@/shared/__generated__/schema';
import { $api } from '@/shared/api/client';
import { Modal } from '@/shared/component/Modal';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

type DocumentDetail = components['schemas']['DocumentInfoGetResponse'];

interface UploadModalProps {
  onConfirmFile: (selectedFiles: DocumentDetail[]) => void;
}

const UploadModal = ({ onConfirmFile }: UploadModalProps) => {
  const [selectedFiles, setSelectedFiles] = useState<DocumentDetail[]>([]);
  const [isAddingFiles, setIsAddingFiles] = useState(false);

  const teamId = useInitializeTeamId();

  const { data: fileData } = $api.useQuery('get', '/api/v1/teams/{teamId}/documents', {
    params: {
      path: {
        teamId,
      },
    },
  });

  const handleFileSelect = (selectedFiles: DocumentDetail[]) => {
    setSelectedFiles(selectedFiles);
  };

  const handleFilesChange = (files: File[]) => {
    console.log('Uploaded Files:', files);
  };

  return (
    <Modal size="large" isOpen>
      <Modal.Header step={2} />
      <Modal.Body>
        <Flex css={flexStyle}>
          {isAddingFiles || fileData?.data?.documents.length === 0 ? (
            <AppendFile onFilesChange={handleFilesChange} />
          ) : (
            <BrowseFile
              files={fileData?.data?.documents || []}
              selectedFiles={selectedFiles}
              onSelectedFilesChange={handleFileSelect}
              onShowBlockAdd={() => setIsAddingFiles(true)}
            />
          )}
        </Flex>
      </Modal.Body>
      <Modal.Footer
        step={3}
        contentType="create-block"
        buttonClick={() => onConfirmFile(selectedFiles)}
        isButtonActive={selectedFiles.length > 0}
      />
    </Modal>
  );
};

export default UploadModal;
