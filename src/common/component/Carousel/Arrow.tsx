import LeftArrow from '@/common/asset/svg/ic_arrow_left_white.svg?react';
import RightArrow from '@/common/asset/svg/ic_arrow_right_white.svg?react';
import { arrowStyle } from '@/common/component/Carousel/Carousel.style';

type ArrowProps = {
  position: 'left' | 'right';
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Arrow = ({ position, onClick }: ArrowProps) => {
  return (
    <button type="button" onClick={onClick} css={arrowStyle(position)}>
      {position === 'left' ? (
        <LeftArrow width="1.6rem" height="1.6rem" />
      ) : (
        <RightArrow width="1.6rem" height="1.6rem" />
      )}
    </button>
  );
};

export default Arrow;
