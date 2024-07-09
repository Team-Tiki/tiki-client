import { sectionStyle, textWrapperStyle } from '@/page/landing/component/FeatureSection/FeatureSection.style';

import { ComponentPropsWithoutRef } from 'react';

import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';

export interface LandingFeatureSectionProps extends ComponentPropsWithoutRef<'section'> {
  title: string;
  description: string;
  imgUrl?: string;
  featureVariant: 'first' | 'second';
}

const LandingFeatureSection = ({ title, description, featureVariant }: LandingFeatureSectionProps) => {
  return (
    <section css={sectionStyle(featureVariant)}>
      <div css={textWrapperStyle}>
        <Heading tag="H2">{title}</Heading>
        <Text tag="body2" css={{ fontWeight: 400, whiteSpace: 'pre-line' }}>
          {description}
        </Text>
      </div>
      <p>IMAGE</p>
    </section>
  );
};

export default LandingFeatureSection;
