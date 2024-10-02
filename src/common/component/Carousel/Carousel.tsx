import { Children, MutableRefObject, PropsWithChildren, createContext } from 'react';

import Arrow from '@/common/component/Carousel/Arrow';
import { containerStyle, sliderStyle } from '@/common/component/Carousel/Carousel.style';
import CarouselItem from '@/common/component/Carousel/CarouselItem';
import Dots from '@/common/component/Carousel/Dots';
import { useCarousel } from '@/common/hook/useCarousel';

export interface CarouselProps extends PropsWithChildren {
  width?: string;
  height?: string;

  hasArrows?: boolean;
  hasDots?: boolean;

  autoLoop?: boolean;
  autoLoopDelay?: number;

  children: JSX.Element | JSX.Element[];
}

type CarouselContextType = {
  width: string;
  height: string;
  currentIndex: number;
  itemRef: MutableRefObject<HTMLDivElement | null>;
};

export const CarouselContext = createContext<CarouselContextType>({} as CarouselContextType);

const Carousel = ({
  width = '100%',
  height = '400px',
  autoLoop = false,
  autoLoopDelay = 5000,
  children,
  hasArrows = true,
  hasDots = true,
}: CarouselProps) => {
  const { currentIndex, itemRef, handleLeft, handleRight, handleMoveTo, handleHover, handleLeave } = useCarousel(
    Children.count(children),
    autoLoop,
    autoLoopDelay
  );

  return (
    <CarouselContext.Provider value={{ width, height, currentIndex, itemRef }}>
      <div onMouseOver={handleHover} onMouseLeave={handleLeave} css={containerStyle({ width, height })}>
        {hasArrows && (
          <>
            <Arrow position="left" onClick={handleLeft} />
            <Arrow position="right" onClick={handleRight} />
          </>
        )}

        <div css={sliderStyle(height)}>{children}</div>

        {hasDots && <Dots moveToIndex={handleMoveTo} length={Children.count(children)} />}
      </div>
    </CarouselContext.Provider>
  );
};

Carousel.Item = CarouselItem;

export default Carousel;
