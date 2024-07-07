import { textStyle } from '@/common/component/SupportingText/SupportingText.style';
import { theme } from '@/common/style/theme/theme';

interface SupportingTextProps {
  text: string;
  isError?: boolean; //red
  isNotice?: boolean; //blue
}

const SupportingText = ({ text, isError = false, isNotice = false }: SupportingTextProps) => {
  const textColor = isError ? theme.colors.red : isNotice ? theme.colors.blue_900 : theme.colors.gray_400;
  return <p css={textStyle(textColor)}>{text}</p>;
};

export default SupportingText;
