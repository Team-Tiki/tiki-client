import { useEffect, useState } from 'react';

import BlockInfoModal from '@/page/archiving/index/component/TimeBlockModal/component/BlockInfoModal/BlockInfoModal';
import CategoryModal from '@/page/archiving/index/component/TimeBlockModal/component/CategoryModal/CategoryModal';
import SelectedFileModal from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/Selected/SelectedFileModal';
import UploadModal from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/UploadModal';

import { useFunnel } from '@/shared/hook/common/useFunnel';
import { FunnelStep } from '@/shared/util/funnelStep';

export const BlockFlow = () => {
  const { setTotalSteps } = useFunnel();
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    setTotalSteps(4);
  }, [setTotalSteps]);

  const handleFilesConfirmed = (selectedFiles: File[]) => {
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
        <UploadModal onFilesConfirmed={handleFilesConfirmed} />
      </FunnelStep>
      <FunnelStep step={4}>
        <SelectedFileModal selectedFiles={files} />
      </FunnelStep>
    </>
  );
};
