import IcDefault from '@/common/asset/svg/ic_default_profile.svg';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';

import {
  containerStyle,
  descriptionStyle,
  detailStyle,
  imageStyle,
} from '@/page/showcase/index/component/ClubProfileCard/ClubProfileCard.style';

import CachedImage from '@/shared/component/CachedImage/CachedImage';

interface ClubProfileCardProps {
  title: string;
  detail: string;
  imageUrl?: string;
  onClick?: () => void;
}

const ClubProfileCard = ({ title, detail, imageUrl, onClick }: ClubProfileCardProps) => {
  return (
    <div
      role="link"
      css={containerStyle}
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' && onClick) {
          onClick();
        }
      }}>
      {imageUrl ? (
        <CachedImage css={imageStyle} alt={`${title} 프로필 이미지`} imageUrl={imageUrl} width={300} />
      ) : (
        <img css={imageStyle} src={IcDefault} alt={`${title} 프로필 이미지`} />
      )}

      <div css={descriptionStyle}>
        <Heading tag="H6">{title}</Heading>
        <Text tag="body7" css={detailStyle}>
          {detail}
        </Text>
      </div>
    </div>
  );
};

export default ClubProfileCard;
