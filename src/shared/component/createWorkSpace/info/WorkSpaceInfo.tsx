import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';

import { headingStyle, sectionStyle, textStyle } from '@/shared/component/createWorkSpace/info/WorkSpaceInfo.style';

interface WorkSapceInfoProps {
  step?: number;
  title: string;
  info: string;
}

const WorkSapceInfo = ({ step, title, info }: WorkSapceInfoProps) => {
  return (
    <section css={sectionStyle}>
      {step !== undefined && (
        <Heading tag="H6" css={{ fontWeight: 500 }}>
          {step}&nbsp;/&nbsp;3
        </Heading>
      )}
      <Heading css={headingStyle} tag="H5">
        {title}
      </Heading>
      <Text tag="body4" css={textStyle}>
        {info}
      </Text>
    </section>
  );
};

export default WorkSapceInfo;
