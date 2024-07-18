import { css } from '@emotion/react';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3.6rem',

  width: '100%',
  minHeight: '100vh',

  padding: '5.6rem 11.6rem 20rem 11.6rem',

  borderRadius: '16px',
});

export const chipStyle = css({
  display: 'flex',
  gap: '0.8rem',
  flexWrap: 'wrap',

  width: '100%',
  minWidth: '20rem',
});

export const clubProfileStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  gap: '2.4rem',

  width: '100%',

  '@media (max-width: 1300px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },

  '@media (max-width: 1000px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  '@media (max-width: 700px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
});
