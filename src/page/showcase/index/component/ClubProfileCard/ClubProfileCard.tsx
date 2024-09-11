import defaultImage from '@/common/asset/svg/default_profile.svg';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';

import {
  containerStyle,
  descriptionStyle,
  detailStyle,
  imageStyle,
} from '@/page/showcase/index/component/ClubProfileCard/ClubProfileCard.style';

interface ClubProfileCardProps {
  title: string;
  detail: string;
  imageUrl?: string;
  onClick?: () => void;
}

const ClubProfileCard = ({ title, detail, imageUrl, onClick }: ClubProfileCardProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <section css={containerStyle} onClick={onClick}>
      <img src={imageUrl ? imageUrl : defaultImage} alt={`${title}-image`} css={imageStyle} />
      <div css={descriptionStyle}>
        <Heading tag="H6">{title}</Heading>
        <Text tag="body7" css={detailStyle}>
          {detail}
        </Text>
      </div>
    </section>
  );
};

export default ClubProfileCard;
