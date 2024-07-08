import { sectionStyle } from '@/page/landing/component/FeatureSection/FeatureSection.style';

import { ComponentPropsWithoutRef } from 'react';

import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';

interface LandingFeatureSectionProps extends ComponentPropsWithoutRef<'section'> {
  title: string;
  description: string;
  imgUrl?: string;
}

const LandingFeatureSection = ({ title, description }: LandingFeatureSectionProps) => {
  return (
    <section css={sectionStyle}>
      <Heading tag="H2">{title}</Heading>
      <Text tag="body1" css={{ fontWeight: 400 }}>
        {description}
      </Text>
    </section>
  );
};

export default LandingFeatureSection;
