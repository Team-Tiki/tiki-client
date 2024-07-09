import {
  containerStyle,
  descriptionStyle,
  detailStyle,
  imageStyle,
  titleStyle,
} from '@/page/showcase/component/ClubProfileCard/ClubProfileCard.style';

interface ClubProfileCardProps {
  title: string;
  detail: string;
  Image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const ClubProfileCard = ({ title, detail, Image }: ClubProfileCardProps) => {
  return (
    <section css={containerStyle}>
      <Image css={imageStyle} />
      <div css={descriptionStyle}>
        <p css={titleStyle}>{title}</p>
        <p css={detailStyle}>{detail}</p>
      </div>
    </section>
  );
};

export default ClubProfileCard;
