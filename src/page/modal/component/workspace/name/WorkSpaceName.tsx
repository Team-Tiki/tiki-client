import WorkSapceInfo from '@/page/modal/component/workspace/info/WorkSpaceInfo';
import {
  arrowStyle,
  buttonStyle,
  inputWrapperStyle,
  sectionStyle,
  textStyle,
} from '@/page/modal/component/workspace/name/WorkSpaceName.style';

import ArrowRight from '@/common/asset/svg/arrow-right.svg?react';
import Input from '@/common/component/Input/Input';
import Text from '@/common/component/Text/Text';

interface WorkSpaceNameProps {}

const WorkSpaceName = ({}: WorkSpaceNameProps) => {
  return (
    <section css={sectionStyle}>
      <WorkSapceInfo step={1} title="새로운 워크 스페이스 생성하기" info="워크스페이스의 이름을 입력해주세요." />
      <div css={inputWrapperStyle}>
        <Input variant="default" size="large" placeholder="팀,동아리,조직 이름 입력" />
      </div>
      <div css={buttonStyle}>
        <Text tag="body6" css={textStyle}>
          계속 진행하기
        </Text>
        <ArrowRight css={arrowStyle} />
      </div>
    </section>
  );
};

export default WorkSpaceName;
