import { containerStyle } from '@/page/showcase/component/ClubProfileCard/ClubProfileCard.style';

interface ClubProfileCardProps {
  title: string;
  detail: string;
  Image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const ClubProfileCard = ({ title, detail, Image }: ClubProfileCardProps) => {
  return (
    <section css={containerStyle}>
      <Image />
      <p>{title}</p>
      <p>{detail}</p>
    </section>
  );
};

export default ClubProfileCard;
