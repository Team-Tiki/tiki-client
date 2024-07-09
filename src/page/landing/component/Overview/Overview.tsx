import TimeBlock from '@/page/archiving/component/TimeBlock/TimeBlock';
import { containerStyle, titleStyle } from '@/page/landing/component/Overview/Overview.style';

import Heading from '@/common/component/Heading/Heading';

const Overview = () => {
  return (
    <section css={containerStyle}>
      <Heading tag="H1" css={titleStyle}>
        {"TEAM의 A-Z까지\n 하나의 'Ti.Ki'에서 '타카'하세요"}
      </Heading>
      <TimeBlock width={30}>신입회원 모집</TimeBlock>
      <TimeBlock width={40}>hihi</TimeBlock>
    </section>
  );
};

export default Overview;
