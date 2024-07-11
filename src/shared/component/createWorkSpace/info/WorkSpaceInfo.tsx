import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';

import { headingStyle, textStyle } from '@/shared/component/createWorkSpace/info/WorkSpaceInfo.style';
import { STEPS } from '@/shared/constant';

interface WorkSapceInfoProps {
  step?: 'name' | 'category' | 'image';
  title: string;
  info: string;
}

const WorkSapceInfo = ({ step, title, info }: WorkSapceInfoProps) => {
  return (
    <Flex tag={'section'} styles={{ direction: 'column', justify: 'center', align: 'center' }}>
      {step !== undefined ? (
        <Heading tag="H6">{STEPS[step.toUpperCase() as keyof typeof STEPS]}/3</Heading>
      ) : (
        <div style={{ height: '1.6rem' }}></div>
      )}
      <Heading css={headingStyle} tag="H5">
        {title}
      </Heading>
      <Text tag="body4" css={textStyle}>
        {info}
      </Text>
    </Flex>
  );
};

export default WorkSapceInfo;
