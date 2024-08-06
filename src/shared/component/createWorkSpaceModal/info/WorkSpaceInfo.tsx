import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';

import { headingStyle, textStyle, topStyle } from '@/shared/component/createWorkSpaceModal/info/WorkSpaceInfo.style';
import { STEPS, STEPS_BY_CATEGORY } from '@/shared/constant';

interface WorkSpaceInfoProps {
  step?: 'name' | 'category' | 'image' | 'block' | 'upload';
  title: string;
  info: string;
}

const WorkSpaceInfo = ({ step, title, info }: WorkSpaceInfoProps) => {
  const getTotalSteps = (step: string | undefined) => {
    if (!step) return undefined;
    const upperCaseStep = step.toUpperCase() as keyof typeof STEPS_BY_CATEGORY;
    return STEPS_BY_CATEGORY[upperCaseStep] ?? undefined;
  };

  return (
    <Flex tag={'section'} styles={{ direction: 'column', justify: 'center', align: 'center' }}>
      {step !== undefined && (
        <Text css={topStyle}>
          {STEPS[step.toUpperCase() as keyof typeof STEPS]}/{getTotalSteps(step)}
        </Text>
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

export default WorkSpaceInfo;
