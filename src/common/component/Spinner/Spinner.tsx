import SpinnerIcon from '@/common/asset/svg/spiner.svg?react';
import { rotate } from '@/common/style/animation';

interface SpinnerProps {
  size: number;
}

const Spinner = ({ size = 20 }: SpinnerProps) => {
  return <SpinnerIcon width={size} height={size} css={{ animation: `${rotate} 1s linear infinite` }} />;
};

export default Spinner;
