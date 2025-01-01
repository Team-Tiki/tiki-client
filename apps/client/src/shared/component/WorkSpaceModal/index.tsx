import WorkSpaceCategory from '@/shared/component/WorkSpaceModal/category/WorkSpaceCategory';
import WorkSpaceComplete from '@/shared/component/WorkSpaceModal/complete/WorkSpaceComplete';
import WorkSpaceImage from '@/shared/component/WorkSpaceModal/image/WorkSpaceImage';
import WorkSpaceName from '@/shared/component/WorkSpaceModal/name/WorkSpaceName';
import { useFunnel } from '@/shared/hook/common/useFunnel';
import { FunnelStep } from '@/shared/util/funnelStep';

export const WorkSpaceFlow = () => {
  const { setTotalSteps } = useFunnel();

  setTotalSteps(4);

  return (
    <>
      <FunnelStep step={1}>
        <WorkSpaceName />
      </FunnelStep>
      <FunnelStep step={2}>
        <WorkSpaceCategory />
      </FunnelStep>
      <FunnelStep step={3}>
        <WorkSpaceImage />
      </FunnelStep>
      <FunnelStep step={4}>
        <WorkSpaceComplete />
      </FunnelStep>
    </>
  );
};
