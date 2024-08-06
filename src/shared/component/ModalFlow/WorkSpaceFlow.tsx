import { useWorkSpaceContext } from '@/shared/hook/common/useWorkSpaceContext';

import WorkSpaceCategory from '../createWorkSpaceModal/modalContents/category/WorkSpaceCategory';
import WorkSpaceComplete from '../createWorkSpaceModal/modalContents/complete/WorkSpaceComplete';
import WorkSpaceImage from '../createWorkSpaceModal/modalContents/image/WorkSpaceImage';
import WorkSpaceName from '../createWorkSpaceModal/modalContents/name/WorkSpaceName';

export const WorkSpaceFlow = () => {
  const { step } = useWorkSpaceContext();

  return (
    <div>
      {step === 1 && <WorkSpaceName />}
      {step === 2 && <WorkSpaceCategory />}
      {step === 3 && <WorkSpaceImage />}
      {step === 4 && <WorkSpaceComplete />}
    </div>
  );
};
