import { css } from '@emotion/react';

export const containerStyle = css({
  width: '100%',
  minWidth: '21.15rem',

  cursor: 'pointer',

  transition: 'all 0.2s 0s ease-in',
  ':hover': {
    transform: 'scale(1.03, 1.03)',
  },
});

export const imageStyle = css({
  width: '100%',

  borderRadius: '16px 16px 0px 0px',

  objectFit: 'cover',
  aspectRatio: 16 / 9,
});

export const descriptionStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',

  padding: '1.6rem',
});

export const detailStyle = css({
  height: '3.4rem',

  overflow: 'hidden',
});
