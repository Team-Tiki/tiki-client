import { css } from '@emotion/react';

import completePng from '@/common/asset/img/workspace_complete.png';
import complete from '@/common/asset/img/workspace_complete.webp';
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
      <picture>
        <source srcSet={complete} />
        <img css={imgStyle} src={completePng} alt="워크 스페이스 완료 이미지" />
      </picture>
    </Flex>
  );
};

export default WorkSpaceComplete;

export const imgStyle = css({
  width: '30rem',
  height: '30rem',

  objectFit: 'cover',
});
