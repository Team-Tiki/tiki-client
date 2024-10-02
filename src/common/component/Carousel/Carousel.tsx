import React, { Children, MutableRefObject, PropsWithChildren, createContext, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

import Arrow from '@/common/component/Carousel/Arrow';
import { containerStyle, sliderStyle } from '@/common/component/Carousel/Carousel.style';
import CarouselItem from '@/common/component/Carousel/CarouselItem';
import Dots from '@/common/component/Carousel/Dots';

export interface CarouselProps extends PropsWithChildren {
  width?: string;
  height?: string;

  hasArrows?: boolean;
  hasDots?: boolean;

  children: JSX.Element | JSX.Element[];
}

type CarouselContextType = {
  currentIndex: number;
  itemRef: MutableRefObject<HTMLDivElement | null>;
};

export const CarouselContext = createContext<CarouselContextType>({} as CarouselContextType);

const Carousel = ({ width = '100%', height = '400px', children, hasArrows = true, hasDots = true }: CarouselProps) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const length = Children.count(children);

  const handleLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (itemRef.current) {
      flushSync(() => {
        setCurrentIndex((prev) => (prev > 1 ? prev - 1 : 1));
      });

      itemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const handleRight = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (itemRef.current) {
      flushSync(() => {
        setCurrentIndex((prev) => (prev < length ? prev + 1 : length));
      });

      itemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const handleMoveTo = (index: number) => {
    if (itemRef.current) {
      flushSync(() => {
        setCurrentIndex(index);
      });

      itemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  return (
    <CarouselContext.Provider value={{ currentIndex, itemRef }}>
      <div css={containerStyle({ width, height })}>
        {hasArrows && (
          <>
            <Arrow position="left" onClick={handleLeft} />
            <Arrow position="right" onClick={handleRight} />
          </>
        )}

        <div css={sliderStyle(height)}>{children}</div>

        {hasDots && <Dots moveToIndex={handleMoveTo} currentIdx={currentIndex} length={length} />}
      </div>
    </CarouselContext.Provider>
  );
};

Carousel.Item = CarouselItem;

export default Carousel;
