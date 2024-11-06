import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';

import { headingStyle, sectionStyle, textStyle } from '@/page/deleted/component/EmptySection/EmptySection.style';

const EmptySection = () => {
  return (
    <section css={sectionStyle}>
      <Heading css={headingStyle} tag="H4">
        휴지통이 비어있습니다.
      </Heading>

      <Flex styles={{ direction: 'column', align: 'center', gap: '1.2rem' }}>
        <Text css={textStyle} tag="body3">
          필요하지 않은 파일은 휴지통으로 옮겨주세요
        </Text>
        <Text css={textStyle} tag="body3">
          휴지통에 있는 파일은 30일 후 완전히 삭제됩니다
        </Text>
      </Flex>
    </section>
  );
};

export default EmptySection;
