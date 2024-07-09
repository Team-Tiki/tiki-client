import { landingStyle, sectionStyle, startedButtonStyle } from '@/page/landing/LandingPage.style';
import LandingFeatureSection from '@/page/landing/component/FeatureSection/FeatureSection';
import LandingOverview from '@/page/landing/component/Overview/Overview';

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
      <LandingOverview />
      <LandingFeatureSection
        featureVariant="first"
        title="동아리의 모든 순간을 쉽고 즐겁게"
        description={'우리 동아리의 타임라인을 만들고\n 활동과 파일을 함께 기록하여\n 운영상황을 한 눈에 정리하세요.'}
      />
      <LandingFeatureSection
        featureVariant="second"
        title="교내 동아리 탐색하기"
        description={
          '동아리 프로필을 만들고 모아볼 수 있는 기능을 통해 \n다른 학생단체와의 파트너십과 모집부원 홍보를\n 한 번에 해결하세요.'
        }
      />
    </main>
  );
};

export default LandingPage;
