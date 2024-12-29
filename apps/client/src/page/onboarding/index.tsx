import { Button, Flex, Heading, Text } from '@tiki/ui';

import { pageStyle } from '@/page/onboarding/index.style';

const OnBoardingPage = () => {
  return (
    <Flex css={pageStyle}>
      <Heading tag="H5" css={{ fontWeight: 600 }}>
        티키에 오신 것을 환영합니다.
      </Heading>
      <Text tag="body4" css={{ margin: '2.4rem 0 3.2rem 0', textAlign: 'center' }}>
        우리 동아리의 워크스페이스를 생성해보세요.
        <br />
        이미 생성된 워크스페이스가 있다면 초대 메일을 통해 팀 워크스페이스에 합류할 수 있습니다.
      </Text>
      <Button size="small">워크스페이스 생성</Button>
    </Flex>
  );
};

export default OnBoardingPage;
