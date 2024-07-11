import { css } from '@emotion/react';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.6rem',

  borderRadius: '16px',

  backgroundColor: 'white',
});

export const clubProfileStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  gap: '2.4rem',
});
