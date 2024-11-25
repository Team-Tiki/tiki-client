import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';

import { headingStyle, sectionStyle, textStyle } from '@/shared/component/EmptySection/EmptySection.style';
import { HEADING, TEXT } from '@/shared/component/EmptySection/constant';

type EmptySection = {
  domain: 'drive' | 'deleted' | 'handover';
  isVisible: boolean;
};

const EmptySection = ({ domain, isVisible }: EmptySection) => {
  return (
    isVisible && (
      <section css={sectionStyle}>
        <Heading css={headingStyle} tag="H4">
          {HEADING[domain]}
        </Heading>

        <Text css={textStyle} tag="body3">
          {TEXT[domain]}
        </Text>
      </section>
    )
  );
};

export default EmptySection;
