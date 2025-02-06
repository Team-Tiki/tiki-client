import { useEffect, useState } from 'react';

import { components } from '@/shared/__generated__/schema';
import { $api } from '@/shared/api/client';
import BrowseFileModal from '@/shared/component/BrowseFileModal/BrowseFileModal';
import NewFileImportModal from '@/shared/component/NewFileImportModal/NewFileImportModal';
import SelectedFilesModal from '@/shared/component/SelectedFilesModal/SelectedFilesModal';
import { useFunnel } from '@/shared/hook/common/useFunnel';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal } from '@/shared/store/modal';
import { FunnelStep } from '@/shared/util/funnelStep';

export type DocumentDetail = components['schemas']['DocumentInfoGetResponse'];

export const TimeBlockFileUploadFlow = () => {
  const [files, setFiles] = useState<DocumentDetail[]>([]);
  const [isAddingFiles, setIsAddingFiles] = useState(false);

  const teamId = useInitializeTeamId();

  const { setTotalSteps, nextStep } = useFunnel();
  const closeModal = useCloseModal();

  const { data: fileData } = $api.useQuery('get', '/api/v1/documents/team/{teamId}/timeline', {
    params: {
      query: { type: 'executive' },
      path: { teamId },
    },
  });

  const handleFilesConfirmed = (selectedFiles: DocumentDetail[]) => {
    setFiles((prevFiles) => {
      const combinedFiles = [...prevFiles, ...selectedFiles];
      return Array.from(new Map(combinedFiles.map((file) => [file.documentId, file])).values());
    });
  };

  const handleComplete = () => {
    closeModal();
  };

  useEffect(() => {
    setTotalSteps(2);
  }, [setTotalSteps]);

  return (
    <>
      <FunnelStep step={1}>
        {isAddingFiles ? (
          <NewFileImportModal
            size="large"
            onUploadFile={handleFilesConfirmed}
            onPrev={() => {
              setIsAddingFiles(false);
            }}
            onNext={() => {
              nextStep();
            }}
          />
        ) : (
          <BrowseFileModal
            files={fileData?.data?.documents || []}
            selectedFiles={files}
            onShowBlockAdd={() => setIsAddingFiles(true)}
            onConfirmFile={handleFilesConfirmed}
          />
        )}
      </FunnelStep>
      <FunnelStep step={2}>
        <SelectedFilesModal selectedFiles={files} onComplete={handleComplete} />
      </FunnelStep>
    </>
  );
};
