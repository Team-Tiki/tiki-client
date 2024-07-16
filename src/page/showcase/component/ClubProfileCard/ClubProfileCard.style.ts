import { css } from '@emotion/react';

export const containerStyle = css({
  minWidth: '21.15rem',
  maxWidth: '27.55rem',
  cursor: 'pointer',
});

export const imageStyle = css({
  width: '100%',

  borderRadius: '16px 16px 0px 0px',

  objectFit: 'cover',
  aspectRatio: 16 / 9,

  backgroundImage: '',
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
