import { HTMLAttributes } from 'react';

import useCachedImage from '@/common/hook/useCachedImage';

interface CachedImageProps extends HTMLAttributes<HTMLImageElement> {
  imageUrl: string;
  width: number;
  height?: number;

  alt?: string;
}

const CachedImage = ({ imageUrl, width, height, alt, ...props }: CachedImageProps) => {
  const { src, imgRef, onLoad, onError, shouldRenderOrigin } = useCachedImage(imageUrl, width, height);

  return shouldRenderOrigin ? (
    <img src={imageUrl} alt={alt} loading="lazy" decoding="async" {...props} />
  ) : (
    <img
      src={src}
      ref={imgRef}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={onLoad}
      onError={onError}
      {...props}
    />
  );
};

export default CachedImage;
