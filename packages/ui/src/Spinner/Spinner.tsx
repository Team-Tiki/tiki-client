import { rotate } from "@/animation";
import { theme } from "@/theme";
import { IcSpinner } from "@tiki/icon";

interface SpinnerProps {
  size: number;
}

const Spinner = ({ size = 20 }: SpinnerProps) => {
  return (
    <IcSpinner
      width={size}
      height={size}
      css={{ animation: `${rotate} 1s linear infinite`, fill: `${theme.colors.key_500}` }}
    />
  );
};

export default Spinner;
