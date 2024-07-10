import {
  buttonStyle,
  containerStyle,
  contentStyle,
  descriptionStyle,
  titleStyle,
} from '@/page/showcase/component/AdvBanner/AdvBanner.style';

import Button from '@/common/component/Button/Button';
import Heading from '@/common/component/Heading/Heading';

interface AdvBannerProps {
  title: string;
  detail?: string;
  imageUrl: string;
  externUrl: string;
}

const AdvBanner = ({ title, detail, imageUrl, externUrl }: AdvBannerProps) => {
  externUrl = 'https://www.sopt.org/recruit';

  const handleLinkMove = () => {
    window.open(externUrl);
  };

  return (
    <article css={containerStyle(imageUrl)}>
      <div css={descriptionStyle}>
        <Heading tag="H3" css={titleStyle}>
          {title}
        </Heading>
        <Heading tag="H6" css={contentStyle}>
          {detail}
        </Heading>
      </div>
      <Button variant="action" onClick={handleLinkMove} css={buttonStyle}>
        링크 바로가기
      </Button>
    </article>
  );
};

export default AdvBanner;
