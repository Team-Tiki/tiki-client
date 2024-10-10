import { css } from '@emotion/react';

export const tagStyle = ({ variant }: { variant: 'round' | 'square' }) =>
  css({
    display: 'flex',

    padding: '0.4rem 0.8rem',

    borderRadius: variant === 'round' ? '1rem' : '0.8rem',
  });
