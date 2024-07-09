import WorkSapceInfo from '@/page/modal/component/workspace/info/WorkSpaceInfo';

import Input from '@/common/component/Input/Input';
import Modal from '@/common/component/Modal/Modal';

interface WorkSpaceNameProps {}

const WorkSpaceName = ({}: WorkSpaceNameProps) => {
  return (
    <section>
      <WorkSapceInfo step={1} title="새로운 워크 스페이스 생성하기" info="워크스페이스의 이름을 입력해주세요." />
    </section>
  );
};

export default WorkSpaceName;
