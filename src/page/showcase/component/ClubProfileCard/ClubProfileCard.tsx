interface ClubProfileCardProps {
  title: string;
  detail: string;
  image: string;
}

const ClubProfileCard = ({ title, detail, image }: ClubProfileCardProps) => {
  return (
    <section>
      <img src={image} alt={`${title}-image`} />
      <p>{title}</p>
      <p>{detail}</p>
    </section>
  );
};

export default ClubProfileCard;
