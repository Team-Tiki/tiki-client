import { Flex } from '@tiki/ui';

import { useCallback, useRef, useState } from 'react';

import { components } from '@/shared/__generated__/schema';
import { $api } from '@/shared/api/client';
import BrowseFileModal from '@/shared/component/BrowseFileModal/BrowseFileModal';
import NewFileUploadModal from '@/shared/component/NewFileUploadModal/NewFileUploadModal';
import { flexStyle } from '@/shared/component/TimeBlockModal/style';
import { useBlockContext } from '@/shared/hook/common/useBlockContext';
import { useFunnel } from '@/shared/hook/common/useFunnel';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

type DocumentDetail = components['schemas']['DocumentInfoGetResponse'];

interface UploadModalProps {
  onConfirmFile: (selectedFiles: DocumentDetail[]) => void;
}

const UploadModal = ({ onConfirmFile }: UploadModalProps) => {
  const [selectedFiles, setSelectedFiles] = useState<DocumentDetail[]>([]);
  const [isUploadNewFile, setIsUploadNewFile] = useState(false);
  const selectedFilesRef = useRef<DocumentDetail[]>(selectedFiles);

  const { nextStep } = useFunnel();

  const { setFormData } = useBlockContext();

  const teamId = useInitializeTeamId();

  const { data: fileData } = $api.useQuery('get', '/api/v1/documents/team/{teamId}/timeline', {
    params: {
      query: { type: 'executive' },
      path: { teamId },
    },
  });

  const handleFileSelect = useCallback(
    (selected: DocumentDetail[]) => {
      const combinedFiles = [...selectedFilesRef.current, ...selected].filter(
        (file, index, self) => index === self.findIndex((f) => f.documentId === file.documentId)
      );

      setSelectedFiles(combinedFiles);
      selectedFilesRef.current = combinedFiles;

      onConfirmFile(combinedFiles);
    },
    [onConfirmFile]
  );

  const handleNext = () => {
    const documentIds = selectedFilesRef.current.map((file) => file.documentId);

    setFormData({
      documentIds,
    });

    onConfirmFile(selectedFilesRef.current);
    nextStep();
  };

  return (
    <>
      <Flex css={flexStyle}>
        {fileData?.data?.documents.length === 0 || isUploadNewFile ? (
          <NewFileUploadModal
            onUploadFile={handleFileSelect}
            selectedFiles={selectedFiles}
            size="large"
            contentType="create-block"
            onNext={handleNext}
            onPrev={() => setIsUploadNewFile(false)}
          />
        ) : (
          <BrowseFileModal
            type="create-block"
            files={fileData?.data?.documents || []}
            selectedFiles={selectedFiles}
            onShowBlockAdd={() => setIsUploadNewFile(true)}
            onConfirmFile={handleFileSelect}
          />
        )}
      </Flex>
    </>
  );
};

export default UploadModal;
