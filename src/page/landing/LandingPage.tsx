import { landingStyle, sectionStyle, startedButtonStyle } from '@/page/landing/LandingPage.style';
import LandingFeatureSection from '@/page/landing/component/LandingFeatureSection';

import Button from '@/common/component/Button/Button';
import Heading from '@/common/component/Heading/Heading';

const LandingPage = () => {
  return (
    <main css={landingStyle}>
      <section css={sectionStyle}>
        <Heading tag="H1">동아리의 모든 순간을 쉽고 즐겁게</Heading>
        <Heading tag="H2" css={{ fontWeight: 500 }}>
          티키로 더 쉽고 편리한 동아리 활동을 경험하세요
        </Heading>
        <Button css={startedButtonStyle} variant="action">
          시작하기
        </Button>
      </section>
      <LandingFeatureSection
        title="동아리의 모든 순간을 쉽고 즐겁게"
        description="기능 설명입니다 기능 설명입니다 기능 설명입니다"
      />
      <LandingFeatureSection
        title="교내 동아리 탐색하기"
        description="기능 설명입니다 기능 설명입니다 기능 설명입니다"
      />
    </main>
  );
};

export default LandingPage;
