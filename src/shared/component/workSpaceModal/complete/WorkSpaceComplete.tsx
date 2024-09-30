import WorkSpaceCompleteImg from '@/common/asset/svg/ic_complete.svg?react';
import Flex from '@/common/component/Flex/Flex';

import WorkSapceInfo from '@/shared/component/WorkSpaceModal/info/WorkSpaceInfo';
import { sectionStyle } from '@/shared/component/WorkSpaceModal/name/WorkSpaceName.style';

interface WorkSpaceCompleteProps {
  isVisible: boolean;
}

const WorkSpaceComplete = ({ isVisible }: WorkSpaceCompleteProps) => {
  if (!isVisible) return null;

  return (
    <Flex
      tag={'section'}
      styles={{ direction: 'column', justify: 'center', align: 'center', gap: '2rem' }}
      css={sectionStyle}>
      <WorkSapceInfo
        title="워크 스페이스 생성 완료!"
        info="이제 동아리 효율적인 문서와 일정관리를 이용하실 수 있습니다"
      />
      <WorkSpaceCompleteImg width={300} height={300} />
    </Flex>
  );
};

export default WorkSpaceComplete;
