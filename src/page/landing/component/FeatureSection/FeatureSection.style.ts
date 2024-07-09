import { LandingFeatureSectionProps } from '@/page/landing/component/FeatureSection/FeatureSection';
import { css } from '@emotion/react';

export const sectionStyle = (variant: LandingFeatureSectionProps['featureVariant']) =>
  css({
    display: 'flex',
    flexDirection: variant === 'first' ? 'row' : 'row-reverse',

    padding: '4rem 8rem',

    textAlign: variant === 'first' ? 'start' : 'end',

    scrollSnapAlign: 'start',

    '& > p': {
      placeSelf: 'end',
    },
  });

export const textWrapperStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});
