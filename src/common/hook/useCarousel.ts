import React, { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

import { useThrottle } from '@/common/hook/useThrottle';

export const useCarousel = (length: number, autoLoop?: boolean, autoLoopDelay?: number) => {
  /**
   * container hover 상태
   * Item 요소 혹은 Arrow 에 마우스 hover 시 자동 Loop 중지
   */
  const [isContainerHover, setIsContainerHover] = useState(false);

  /** 현재 view에 보여지고 있는 item ref */
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const throttledCallback = useThrottle();

  /** 왼쪽 슬라이드로 */
  const handleLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (itemRef.current) {
      throttledCallback(() => {
        flushSync(() => {
          setCurrentIndex((prev) => (prev > 1 ? prev - 1 : length));
        });

        itemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }, 1000);
    }
  };

  /** 오른쪽 슬라이드로 */
  const handleRight = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (itemRef.current) {
      throttledCallback(() => {
        flushSync(() => {
          setCurrentIndex((prev) => (prev < length ? prev + 1 : 1));
        });

        itemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }, 1000);
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

  const handleHover = () => {
    setIsContainerHover(true);
  };

  const handleLeave = () => {
    setIsContainerHover(false);
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

  return {
    currentIndex,
    itemRef,
    handleLeft,
    handleRight,
    handleMoveTo,
    handleHover,
    handleLeave,
  };
};
