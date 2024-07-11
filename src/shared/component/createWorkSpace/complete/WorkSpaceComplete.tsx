import WorkSpaceCompleteImg from '@/common/asset/svg/workspace-complete.svg?react';
import Flex from '@/common/component/Flex/Flex';

import WorkSapceInfo from '@/shared/component/createWorkSpace/info/WorkSpaceInfo';
import { sectionStyle } from '@/shared/component/createWorkSpace/name/WorkSpaceName.style';

const WorkSpaceComplete = () => {
  return (
    <Flex tag={'section'} styles={{ direction: 'column', justify: 'center', align: 'center' }} css={sectionStyle}>
      <WorkSapceInfo
        title="워크 스페이스 생성 완료!"
        info="이제 동아리 효율적인 문서와 일정관리를 이용하실 수 있습니다"
      />
      <WorkSpaceCompleteImg css={{ width: '30rem', height: '30rem' }} />
    </Flex>
  );
};

export default WorkSpaceComplete;
