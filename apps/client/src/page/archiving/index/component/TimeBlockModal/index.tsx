import { useEffect } from 'react';

import BlockInfoModal from '@/page/archiving/index/component/TimeBlockModal/component/BlockInfoModal/BlockInfoModal';
import CategoryModal from '@/page/archiving/index/component/TimeBlockModal/component/CategoryModal/CategoryModal';
import UploadModal from '@/page/archiving/index/component/TimeBlockModal/component/Upload/UploadModal';

import { useFunnel } from '@/shared/hook/common/useFunnel';
import { FunnelStep } from '@/shared/util/funnelStep';

export const BlockFlow = () => {
  const { setTotalSteps } = useFunnel();

  useEffect(() => {
    setTotalSteps(3);
  }, [setTotalSteps]);

  return (
    <>
      <FunnelStep step={1}>
        <CategoryModal />
      </FunnelStep>{' '}
      <FunnelStep step={2}>
        <BlockInfoModal />
      </FunnelStep>
      <FunnelStep step={3}>
        <UploadModal />
      </FunnelStep>
    </>
  );
};
