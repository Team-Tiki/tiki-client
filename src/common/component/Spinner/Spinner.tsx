import SpinnerIcon from '@/common/asset/svg/spinner.svg?react';
import { rotate } from '@/common/style/animation';
import { theme } from '@/common/style/theme/theme';

interface SpinnerProps {
  size: number;
}

const Spinner = ({ size = 20 }: SpinnerProps) => {
  return (
    <SpinnerIcon
      width={size}
      height={size}
      css={{ animation: `${rotate} 1s linear infinite`, fill: `${theme.colors.key_500}` }}
    />
  );
};

export default Spinner;
