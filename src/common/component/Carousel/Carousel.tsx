import React, {
  Children,
  MutableRefObject,
  PropsWithChildren,
  createContext,
  useEffect,
  useRef,
  useState,
} from 'react';
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

  autoLoop?: boolean;
  autoLoopDelay?: number;

  children: JSX.Element | JSX.Element[];
}

type CarouselContextType = {
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
  /**
   * container hover 상태
   * Item 요소 혹은 Arrow 에 마우스 hover 시 자동 Loop 중지
   */
  const [isContainerHover, setIsContainerHover] = useState(false);

  /** 현재 view에 보여지고 있는 item ref */
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const length = Children.count(children);

  /** 왼쪽 슬라이드로 */
  const handleLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (itemRef.current) {
      flushSync(() => {
        setCurrentIndex((prev) => (prev > 1 ? prev - 1 : 1));
      });

      itemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  /** 오른쪽 슬라이드로 */
  const handleRight = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (itemRef.current) {
      flushSync(() => {
        setCurrentIndex((prev) => (prev < length ? prev + 1 : length));
      });

      itemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  /** Dot 클릭 시 해당 슬라이드로 */
  const handleMoveTo = (index: number) => {
    if (itemRef.current) {
      flushSync(() => {
        setCurrentIndex(index);
      });

      itemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  /** autoLoop: true 시 interval 생성 */
  useEffect(() => {
    if (autoLoop) {
      const interval = setInterval(() => {
        flushSync(() => {
          setCurrentIndex((prev) => (prev < length ? prev + 1 : 1));
        });

        itemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }, autoLoopDelay);

      /** Container hover 시 interval 종료 */
      if (isContainerHover) {
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }
  }, [autoLoop, length, isContainerHover]);

  return (
    <CarouselContext.Provider value={{ currentIndex, itemRef }}>
      <div
        onMouseOver={() => setIsContainerHover(true)}
        onMouseLeave={() => setIsContainerHover(false)}
        css={containerStyle({ width, height })}>
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
