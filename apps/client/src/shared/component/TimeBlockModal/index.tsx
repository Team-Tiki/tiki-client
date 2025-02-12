import { useEffect, useState } from 'react';

import { components } from '@/shared/__generated__/schema';
import BlockInfoModal from '@/shared/component/TimeBlockModal/BlockInfoModal';
import CategoryModal from '@/shared/component/TimeBlockModal/CategoryModal';
import SelectedFileModal from '@/shared/component/TimeBlockModal/SelectedFileModal';
import UploadModal from '@/shared/component/TimeBlockModal/UploadModal';
import { useFunnel } from '@/shared/hook/common/useFunnel';
import { FunnelStep } from '@/shared/util/funnelStep';

export type DocumentDetail = components['schemas']['DocumentInfoGetResponse'];

export const BlockFlow = () => {
  const { setTotalSteps } = useFunnel();
  const [files, setFiles] = useState<DocumentDetail[]>([]);

  useEffect(() => {
    setTotalSteps(4);
  }, [setTotalSteps]);

  const handleFilesConfirmed = (selectedFiles: DocumentDetail[]) => {
    setFiles(selectedFiles);
  };

  return (
    <>
      <FunnelStep step={1}>
        <CategoryModal />
      </FunnelStep>
      <FunnelStep step={2}>
        <BlockInfoModal />
      </FunnelStep>
      <FunnelStep step={3}>
        <UploadModal onConfirmFile={handleFilesConfirmed} />
      </FunnelStep>
      <FunnelStep step={4}>
        <SelectedFileModal selectedFiles={files} />
      </FunnelStep>
    </>
  );
};
