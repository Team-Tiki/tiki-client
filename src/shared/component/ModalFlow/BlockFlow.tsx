import BlockModal from '@/page/archiving/timeBlockModal/component/Block/BlockModal';
import UploadModal from '@/page/archiving/timeBlockModal/component/Upload/UploadModal';

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
