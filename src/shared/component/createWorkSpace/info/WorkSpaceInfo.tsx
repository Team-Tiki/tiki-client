import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';

import { headingStyle, sectionStyle, textStyle } from '@/shared/component/createWorkSpace/info/WorkSpaceInfo.style';
import { STEPS } from '@/shared/constant';

interface WorkSapceInfoProps {
  step?: 'name' | 'category' | 'image' | 'block' | 'upload';
  title: string;
  info: string;
}

const WorkSapceInfo = ({ step, title, info }: WorkSapceInfoProps) => {
  const getTotalSteps = (step: string | undefined) => {
    const stepMapping: { [key: string]: number } = {
      name: 3,
      category: 3,
      image: 3,
      block: 2,
      upload: 2,
    };
    return step ? stepMapping[step] : undefined;
  };

  return (
    <Flex tag={'section'} styles={{ direction: 'column', justify: 'center', align: 'center' }} css={sectionStyle}>
      {step !== undefined && (
        <Heading tag="H6">
          {STEPS[step.toUpperCase() as keyof typeof STEPS]}/{getTotalSteps(step)}
        </Heading>
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
