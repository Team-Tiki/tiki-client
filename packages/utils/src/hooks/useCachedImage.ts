import { useRef, useState } from "react";

import { useIntersectionObserver } from "./useObserver";

type Timeout = ReturnType<typeof setTimeout>;

export const useCachedImage = (src: string, width: number, height?: number) => {
  const [shouldRenderOrigin, setShouldRenderOrigin] = useState(false);

  const deliverTimeout = useRef<Timeout | null>(null);

  const handleCacheError = () => {
    setShouldRenderOrigin(true);
  };

  /** 캐시로부터 데이터 가져올 수 있다면 타이머 해제, 캐시된 이미지 렌더링 */
  const handleCacheLoaded = () => {
    if (deliverTimeout.current) {
      clearTimeout(deliverTimeout.current);

      setShouldRenderOrigin(false);
    }
  };

  const { targetRef } = useIntersectionObserver<HTMLImageElement>(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          /** 이미 이미지 URL이 로드된 상태라면 리턴 */
          if (targetRef.current?.complete) return;

          /** 로드되지 않다면, 원본 이미지를 보여주기 위한 2초의 대기 시간 세팅 */
          deliverTimeout.current = setTimeout(() => {
            setShouldRenderOrigin(true);
          }, 2000);

          observer.disconnect();
        }
      });
    },
    { root: null },
  );

  const encodedURI = encodeURIComponent(src);

  /** weserv.nl을 활용한 CDN */
  const cdnURI = `https://wsrv.nl/?url=${encodedURI}&w=${width}&h=${height}&output=webp`;

  return { src: cdnURI, imgRef: targetRef, onLoad: handleCacheLoaded, onError: handleCacheError, shouldRenderOrigin };
};
