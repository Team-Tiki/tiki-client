import { Button, Heading, Text } from '@tiki/ui';
import { useIntersectionObserver } from '@tiki/utils';

import firstViewPng from '@/common/asset/img/landing01.png';
import firstView from '@/common/asset/img/landing01.webp';
import secondViewPng from '@/common/asset/img/service02.png';
import secondView from '@/common/asset/img/service02.webp';

import {
  featureSectionStyle,
  firstImgWrapperStyle,
  hideStyle,
  landingStyle,
  secondImgWrapperStyle,
  sectionStyle,
  startedButtonStyle,
  textWrapperStyle,
  viewImgStyle,
} from '@/page/landing/LandingPage.style';
import Indicator from '@/page/landing/component/Indicator/Indicator';
import LandingOverview from '@/page/landing/component/Overview/Overview';
import { TEXT } from '@/page/landing/constant';

import { STORAGE_KEY } from '@/shared/constant/api';
import { PATH } from '@/shared/constant/path';

const LandingPage = () => {
  const handleObserve = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('observer_shown');

        observer.unobserve(entry.target);
      }
    });
  };
  const option = {
    root: document.getElementById('landing_view'),
    threshold: 0.5,
  };

  const { targetRef: overviewRef } = useIntersectionObserver(handleObserve, option);
  const { targetRef: feature1Ref } = useIntersectionObserver(handleObserve, option);
  const { targetRef: feature2Ref } = useIntersectionObserver(handleObserve, option);

  const 세번째뷰로 = () => {
    const next = feature1Ref.current;

    next?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  const 다음페이지로 = () => {
    const isAuth = !!localStorage.getItem(STORAGE_KEY.ACCESS_TOKEN_KEY);

    window.location.href = isAuth ? PATH.DASHBOARD : PATH.LOGIN;
  };

  return (
    <div id="landing_view" css={landingStyle}>
      <section css={sectionStyle}>
        <Heading tag="H1">{TEXT.LANDING_TITLE}</Heading>
        <Heading tag="H2" css={{ fontWeight: 500 }}>
          {TEXT.LANDING_SUBTITLE}
        </Heading>
        <Button onClick={다음페이지로} css={startedButtonStyle}>
          시작하기
        </Button>
        <Indicator
          onNext={() => {
            const next = overviewRef.current;
            next?.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }}
        />
      </section>
      <LandingOverview onNext={세번째뷰로} ref={overviewRef} />
      <section ref={feature1Ref} css={[featureSectionStyle, { textAlign: 'start', position: 'relative' }]}>
        <div css={textWrapperStyle}>
          <Heading css={hideStyle} tag="H1">
            {TEXT.FEATURE_HEADING.FIRST}
          </Heading>
          <Text tag="body2" css={[hideStyle, { fontWeight: 400, whiteSpace: 'pre-line' }]}>
            {TEXT.FEATURE_CONTENT.FIRST}
          </Text>
        </div>
        <div css={firstImgWrapperStyle}>
          <picture>
            <source srcSet={firstView} type="image/webp" css={viewImgStyle} />
            <img css={viewImgStyle} src={firstViewPng} alt="서비스 뷰 1" />
          </picture>
        </div>
        <Indicator
          onNext={() => {
            const next = feature2Ref.current;
            next?.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }}
        />
      </section>
      <section ref={feature2Ref} css={[featureSectionStyle, { textAlign: 'start' }]}>
        <div css={textWrapperStyle}>
          <Heading css={hideStyle} tag="H1">
            {TEXT.FEATURE_HEADING.SECOND}
          </Heading>
          <Text tag="body2" css={[hideStyle, { fontWeight: 400, whiteSpace: 'pre-line' }]}>
            {TEXT.FEATURE_CONTENT.SECOND}
          </Text>
        </div>

        <div css={secondImgWrapperStyle}>
          <picture>
            <source type="image/webp" srcSet={secondView} />
            <img css={[viewImgStyle, { marginLeft: 'calc(100vw - 100%)' }]} src={secondViewPng} alt="서비스 뷰 2" />
          </picture>
        </div>

        <Indicator
          css={{
            transform: 'rotateZ(180deg)',
          }}
          onNext={() => {
            const reset = document.querySelector('#landing_view section:nth-child(1)');

            reset?.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }}
        />
      </section>
    </div>
  );
};

export default LandingPage;
