interface SupportingTextProps {
  text: string;
  isError?: boolean; //red
  isNotice?: boolean; //blue
}

const SupportingText = ({ text, isError = false, isNotice = false }: SupportingTextProps) => {
  return <p>{text}</p>;
};

export default SupportingText;
