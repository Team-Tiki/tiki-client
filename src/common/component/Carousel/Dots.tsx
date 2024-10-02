import { css } from '@emotion/react';

import { useContext } from 'react';

import { CarouselContext } from '@/common/component/Carousel/Carousel';

interface DotsProps {
  length: number;
  moveToIndex?: (index: number) => void;
}

const Dots = ({ length, moveToIndex }: DotsProps) => {
  const { currentIndex } = useContext(CarouselContext);

  return (
    <div css={dotContainerStyle}>
      {Array.from({ length }).map((_, index) => (
        <Dot isCurrent={currentIndex === index + 1} onClick={() => moveToIndex?.(index + 1)} key={index} />
      ))}
    </div>
  );
};

export default Dots;

type DotProps = {
  isCurrent: boolean;
  onClick: () => void;
};

const Dot = ({ onClick, isCurrent }: DotProps) => {
  return <div onClick={onClick} css={dotStyle(isCurrent)} />;
};

const dotContainerStyle = css`
  display: flex;
  gap: 0.8rem;

  position: absolute;
  bottom: 1.6rem;
  left: 50%;

  transform: translateX(-50%);
`;

const dotStyle = (isCurrent: boolean) =>
  css({
    width: '0.8rem',
    height: '0.8rem',

    opacity: isCurrent ? 1 : 0.3,

    borderRadius: '50%',
    backgroundColor: 'white',

    cursor: 'pointer',
  });
