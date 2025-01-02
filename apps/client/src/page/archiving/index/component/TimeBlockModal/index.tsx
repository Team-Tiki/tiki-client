import BlockModal from '@/page/archiving/index/component/TimeBlockModal/component/Block/BlockModal';
import UploadModal from '@/page/archiving/index/component/TimeBlockModal/component/Upload/UploadModal';

import { useFunnel } from '@/shared/hook/common/useFunnel';
import { FunnelStep } from '@/shared/util/funnelStep';

export const BlockFlow = () => {
  const { setTotalSteps } = useFunnel();

  setTotalSteps(2);

  return (
    <>
      <FunnelStep step={1}>
        <BlockModal />
      </FunnelStep>
      <FunnelStep step={2}>
        <UploadModal />
      </FunnelStep>
    </>
  );
};
