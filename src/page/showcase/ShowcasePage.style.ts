import { css } from '@emotion/react';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3.6rem',

  width: '100%',

  padding: '0 16rem',

  borderRadius: '16px',
});

export const chipStyle = css({
  display: 'flex',
  gap: '0.8rem',
  flexWrap: 'wrap',

  width: '100%',
  minWidth: '60rem',
});

export const clubProfileStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  gap: '2.4rem',

  width: '100%',
  minWidth: '60rem',
});