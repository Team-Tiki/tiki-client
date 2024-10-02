import { PropsWithChildren, useContext } from 'react';

import { CarouselContext } from '@/common/component/Carousel/Carousel';
import { itemStyle } from '@/common/component/Carousel/Carousel.style';

type CarouselItemProps = PropsWithChildren<{ index: number }>;

const CarouselItem = ({ index, children }: CarouselItemProps) => {
  const { currentIndex, itemRef } = useContext(CarouselContext);

  return (
    <div
      ref={(node) => {
        if (currentIndex === index + 1) {
          itemRef.current = node as HTMLDivElement;
        }
      }}
      css={itemStyle}>
      {children}
    </div>
  );
};

export default CarouselItem;
