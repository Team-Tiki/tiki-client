import TeamProfileAdd from '@/common/asset/svg/team-profile-add.svg?react';
import TeamProfileDelete from '@/common/asset/svg/team-profile-delete.svg?react';
import Button from '@/common/component/Button/Button';

import {
  buttonCompleteStyle,
  buttonSkipStyle,
  imageAddStyle,
  imageBoxStyle,
  imageDeleteStyle,
} from '@/shared/component/createWorkSpace/image/WorkSpaceImage.style';
import WorkSapceInfo from '@/shared/component/createWorkSpace/info/WorkSpaceInfo';
import { sectionStyle } from '@/shared/component/createWorkSpace/name/WorkSpaceName.style';

interface WorkSpaceImageProps {}

const WorkSpaceImage = ({}: WorkSpaceImageProps) => {
  return (
    <section css={sectionStyle}>
      <WorkSapceInfo
        step={3}
        title="동아리 프로필 이미지 등록"
        info="우리 동아리의 프로필에 표시할 이미지를 등록해주세요"
      />
      <div css={imageBoxStyle}>
        <TeamProfileAdd css={imageAddStyle} />
        <TeamProfileDelete css={imageDeleteStyle} />
      </div>
      <Button css={buttonCompleteStyle} variant="primary" size="medium">
        완료
      </Button>
      <button css={buttonSkipStyle}>Skip</button>
    </section>
  );
};

export default WorkSpaceImage;
