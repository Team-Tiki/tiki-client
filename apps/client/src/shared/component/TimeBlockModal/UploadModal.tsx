import { Flex } from '@tiki/ui';

import { useRef, useState } from 'react';

import { components } from '@/shared/__generated__/schema';
import { $api } from '@/shared/api/client';
import NewFileUploadModal from '@/shared/component/NewFileUploadModal/NewFileUploadModal';
import BrowseFileModal from '@/shared/component/TimeBlockModal/component/BrowseFile/BrowseFileModal';
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
  const selectedFilesRef = useRef<DocumentDetail[]>(selectedFiles);

  const [isAddingFiles, setIsAddingFiles] = useState(false);

  const { nextStep } = useFunnel();

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
        {fileData?.data?.documents.length === 0 || isAddingFiles ? (
          <NewFileUploadModal
            onUploadFile={handleFileSelect}
            selectedFiles={selectedFiles}
            size="large"
            contentType="create-block"
            onNext={handleNext}
            onPrev={() => setIsAddingFiles(false)}
          />
        ) : (
          <BrowseFileModal
            files={fileData?.data?.documents || []}
            selectedFiles={selectedFiles}
            onShowBlockAdd={() => setIsAddingFiles(true)}
            onUpdateSelection={handleFileSelect}
          />
        )}
      </Flex>
    </>
  );
};

export default UploadModal;
