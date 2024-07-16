import {
  buttonStyle,
  containerStyle,
  contentStyle,
  titleStyle,
} from '@/page/showcase/component/AdvBanner/AdvBanner.style';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';

interface AdvBannerProps {
  title: string;
  detail?: string;
  imageUrl: string;
  externUrl: string;
}

const AdvBanner = ({ title, detail, imageUrl, externUrl }: AdvBannerProps) => {
  const handleLinkMove = () => {
    window.open(externUrl);
  };

  return (
    <article css={containerStyle(imageUrl)}>
      <Flex styles={{ direction: 'column', width: '24rem', gap: '2.4rem' }}>
        <Flex styles={{ direction: 'column', gap: '0.8rem' }}>
          <Heading tag="H3" css={titleStyle}>
            {title}
          </Heading>
          <Heading tag="H6" css={contentStyle}>
            {detail}
          </Heading>
        </Flex>

        <Button variant="action" onClick={handleLinkMove} css={buttonStyle}>
          링크 바로가기
        </Button>
      </Flex>
    </article>
  );
};

export default AdvBanner;
