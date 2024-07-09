import { gapStyle, gapStyle2, sectionStyle } from '@/page/modal/component/workspace/info/WorkSpaceInfo.style';

import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';

interface WorkSapceInfoProps {
  step: number;
  title: string;
  info: string;
}

const WorkSapceInfo = ({ step, title, info }: WorkSapceInfoProps) => {
  return (
    <section css={sectionStyle}>
      <Heading tag="H6" css={{ fontWeight: 500 }}>{`${step}/3`}</Heading>
      <Heading css={gapStyle} tag="H5">
        {title}
      </Heading>
      <Text tag="body4" css={gapStyle2}>
        {info}
      </Text>
    </section>
  );
};

export default WorkSapceInfo;
