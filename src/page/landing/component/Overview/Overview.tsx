import { ForwardedRef, forwardRef } from 'react';

import Heading from '@/common/component/Heading/Heading';
import { theme } from '@/common/style/theme/theme';

import Indicator from '@/page/landing/component/Indicator/Indicator';
import { containerStyle, titleStyle } from '@/page/landing/component/Overview/Overview.style';
import { TEXT } from '@/page/landing/constant';

interface OverviewProps {
  onNext?: () => void;
}
const Overview = ({ onNext }: OverviewProps, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section ref={ref} css={containerStyle}>
      <Heading tag="H1" css={titleStyle}>
        {TEXT.OVERVIEW}
      </Heading>

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

export default forwardRef(Overview);
