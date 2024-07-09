import {
  containerStyle,
  descriptionStyle,
  detailStyle,
  imageStyle,
  titleStyle,
} from '@/page/showcase/component/ClubProfileCard/ClubProfileCard.style';

import defaultImage from '@/common/asset/svg/default_profile.svg';

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
        <p css={titleStyle}>{title}</p>
        <p css={detailStyle}>{detail}</p>
      </div>
    </article>
  );
};

export default ClubProfileCard;
