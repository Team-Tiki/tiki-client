import BlockModal from '@/page/archiving/index/component/TimeBlockModal/component/Block/BlockModal';
import UploadModal from '@/page/archiving/index/component/TimeBlockModal/component/Upload/UploadModal';

import { useBlockContext } from '@/shared/hook/common/useBlockContext';

export const BlockFlow = () => {
  const { step } = useBlockContext();

  return (
    <>
      <BlockModal isVisible={step === 1} />
      <UploadModal isVisible={step === 2} />
    </>
  );
};
