import IcSpinner from '@/common/asset/svg/ic_spinner.svg?react';
import { rotate } from '@/common/style/animation';
import { theme } from '@/common/style/theme/theme';

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
