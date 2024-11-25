import { ComponentPropsWithoutRef, useContext } from 'react';

import { CarouselContext } from '@/common/component/Carousel/Carousel';
import { itemStyle } from '@/common/component/Carousel/Carousel.style';

interface CarouselItemProps extends ComponentPropsWithoutRef<'div'> {
  index: number;
}

const CarouselItem = ({ index, children, ...props }: CarouselItemProps) => {
  const { height, currentIndex, itemRef } = useContext(CarouselContext);

  return (
    <div
      ref={(node) => {
        if (currentIndex === index + 1) {
          itemRef.current = node as HTMLDivElement;
        }
      }}
      css={itemStyle(height)}
      {...props}>
      {children}
    </div>
  );
};

export default CarouselItem;
