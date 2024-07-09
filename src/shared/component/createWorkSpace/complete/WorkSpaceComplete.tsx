import { backgroundStyle, sectionStyle } from '@/shared/component/createWorkSpace/complete/WorkSpaceComplete.style';
import WorkSapceInfo from '@/shared/component/createWorkSpace/info/WorkSpaceInfo';

interface WorkSpaceCompleteProps {}

const WorkSpaceComplete = ({}: WorkSpaceCompleteProps) => {
  return (
    <section css={sectionStyle}>
      <WorkSapceInfo title="완료!" info="이제 워크스페이스를 사용할 수 있습니다." />
      <div css={backgroundStyle} />
    </section>
  );
};

export default WorkSpaceComplete;
