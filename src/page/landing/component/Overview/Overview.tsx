import Indicator from '@/page/landing/component/Indicator/Indicator';
import { containerStyle, titleStyle } from '@/page/landing/component/Overview/Overview.style';
import { TEXT } from '@/page/landing/constant';
import { css } from '@emotion/react';
import Lottie from 'lottie-react';

import { ForwardedRef, forwardRef } from 'react';

import serviceAni from '@/common/asset/json/landing_ani.json';
import Heading from '@/common/component/Heading/Heading';
import { theme } from '@/common/style/theme/theme';

interface OverviewProps {
  onNext?: () => void;
}
const Overview = ({ onNext }: OverviewProps, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section ref={ref} css={containerStyle}>
      <Heading tag="H1" css={titleStyle}>
        {TEXT.OVERVIEW}
      </Heading>
      <Lottie aria-label="서비스 소개 애니메이션" animationData={serviceAni} loop={true} css={animationStyle} />
      <Indicator
        onNext={onNext}
        css={{
          path: {
            fill: theme.colors.white,
          },
        }}
      />
    </section>
  );
};

const animationStyle = css({
  opacity: 0,
  transform: 'translateY(2rem)',
  width: '100%',
});

export default forwardRef(Overview);
