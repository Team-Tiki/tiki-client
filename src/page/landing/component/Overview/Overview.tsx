/* eslint-disable import/no-extraneous-dependencies */
import { containerStyle, titleStyle } from '@/page/landing/component/Overview/Overview.style';
import { css } from '@emotion/react';
import Lottie from 'lottie-react';

import { ForwardedRef, forwardRef } from 'react';

import serviceAni from '@/common/asset/json/landing_ani.json';
import Heading from '@/common/component/Heading/Heading';

const Overview = ({}, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section ref={ref} css={containerStyle}>
      <Heading tag="H1" css={titleStyle}>
        {"TEAM의 A-Z까지\n 하나의 'Ti.Ki'에서 '타카'하세요"}
      </Heading>
      <Lottie
        aria-label="서비스 소개 애니메이션"
        animationData={serviceAni}
        loop={true}
        css={css`
          opacity: 0;
          transform: translateY(2rem);
          width: 100%;
        `}
      />
    </section>
  );
};

export default forwardRef(Overview);
