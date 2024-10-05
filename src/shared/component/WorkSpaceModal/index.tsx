import WorkSpaceCategory from '@/shared/component/WorkSpaceModal/category/WorkSpaceCategory';
import WorkSpaceComplete from '@/shared/component/WorkSpaceModal/complete/WorkSpaceComplete';
import WorkSpaceImage from '@/shared/component/WorkSpaceModal/image/WorkSpaceImage';
import WorkSpaceName from '@/shared/component/WorkSpaceModal/name/WorkSpaceName';
import { useWorkSpaceContext } from '@/shared/hook/common/useWorkSpaceContext';

export const WorkSpaceFlow = () => {
  const { step } = useWorkSpaceContext();

  return (
    <>
      <WorkSpaceName isVisible={step == 1} />
      <WorkSpaceCategory isVisible={step == 2} />
      <WorkSpaceImage isVisible={step == 3} />
      <WorkSpaceComplete isVisible={step == 4} />
    </>
  );
};
