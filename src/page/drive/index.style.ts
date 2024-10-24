import { css } from '@emotion/react';

export const contentStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gap: '2.3rem',

  padding: '2.4rem 0 3.2rem 0',

  '@media (max-width: 1366px)': {
    gridTemplateColumns: 'repeat(5, 1fr)',
  },

  '@media (max-width: 1024px)': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },

  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
});
