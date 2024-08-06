import BlockModal from '@/page/archiving/createTimeBlock/component/Block/BlockModal';
import UploadModal from '@/page/archiving/createTimeBlock/component/Upload/UploadModal';

import { useBlockContext } from '@/shared/hook/common/useBlockContext';

export const BlockFlow = () => {
  const { step } = useBlockContext();

  return (
    <div>
      {step === 1 && <BlockModal />}
      {step === 2 && <UploadModal />}
    </div>
  );
};
