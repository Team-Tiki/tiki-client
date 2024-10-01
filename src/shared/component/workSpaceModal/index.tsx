import WorkSpaceCategory from '@/shared/component/workSpaceModal/category/WorkSpaceCategory';
import WorkSpaceComplete from '@/shared/component/workSpaceModal/complete/WorkSpaceComplete';
import WorkSpaceImage from '@/shared/component/workSpaceModal/image/WorkSpaceImage';
import WorkSpaceName from '@/shared/component/workSpaceModal/name/WorkSpaceName';
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
