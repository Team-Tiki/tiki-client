import { useEffect, useState } from 'react';

import BlockInfoModal from '@/page/archiving/index/component/TimeBlockModal/component/BlockInfoModal/BlockInfoModal';
import CategoryModal from '@/page/archiving/index/component/TimeBlockModal/component/CategoryModal/CategoryModal';
import SelectedFileModal from '@/page/archiving/index/component/TimeBlockModal/component/SelectedFileModal/SelectedFileModal';
import UploadModal from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/UploadModal';

import { components } from '@/shared/__generated__/schema';
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
