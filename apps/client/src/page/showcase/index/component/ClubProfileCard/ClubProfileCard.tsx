import { IcDefaultProfile } from '@tiki/icon';
import { Heading, Text } from '@tiki/ui';

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
        <IcDefaultProfile css={imageStyle} aria-label={`${title} 프로필 이미지`} />
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
