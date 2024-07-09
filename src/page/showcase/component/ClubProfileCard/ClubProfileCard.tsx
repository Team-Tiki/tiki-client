import {
  containerStyle,
  descriptionStyle,
  detailStyle,
  imageStyle,
} from '@/page/showcase/component/ClubProfileCard/ClubProfileCard.style';

import defaultImage from '@/common/asset/svg/default_profile.svg';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';

interface ClubProfileCardProps {
  title: string;
  detail: string;
  imageUrl?: string;
}

const ClubProfileCard = ({ title, detail, imageUrl }: ClubProfileCardProps) => {
  return (
    <article css={containerStyle}>
      <img src={imageUrl ? imageUrl : defaultImage} alt={`${title}-image`} css={imageStyle} />
      <div css={descriptionStyle}>
        <Heading tag="H6">{title}</Heading>
        <Text tag="body7" css={detailStyle}>
          {detail}
        </Text>
      </div>
    </article>
  );
};

export default ClubProfileCard;
