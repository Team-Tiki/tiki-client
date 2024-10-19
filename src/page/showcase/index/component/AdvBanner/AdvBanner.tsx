import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';

import {
  buttonStyle,
  containerStyle,
  contentStyle,
  imgStyle,
  titleStyle,
} from '@/page/showcase/index/component/AdvBanner/AdvBanner.style';

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

  const pngBasename = imageUrl.split('.')[0];

  return (
    <article css={containerStyle}>
      <picture>
        <source css={imgStyle} srcSet={imageUrl} type="image/webp" />
        <img src={`${pngBasename}.png`} alt={`${title} 이미지`} css={imgStyle} />
      </picture>
      <Flex styles={{ direction: 'column', width: '24rem', gap: '2.4rem' }}>
        <Flex styles={{ direction: 'column', gap: '0.8rem' }}>
          <Heading tag="H3" css={titleStyle}>
            {title}
          </Heading>
          <Heading tag="H6" css={contentStyle}>
            {detail}
          </Heading>
        </Flex>
        
        <Button tabIndex={-1} variant="action" onClick={handleLinkMove} css={buttonStyle}>
          링크 바로가기
        </Button>
      </Flex>
    </article>
  );
};

export default AdvBanner;
