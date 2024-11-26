/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext } from "react";

import { CarouselContext } from "@/Carousel/Carousel";
import { dotContainerStyle, dotStyle } from "@/Carousel/Carousel.style";

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
  return <div role="button" tabIndex={-1} onClick={onClick} css={dotStyle(isCurrent)} />;
};
