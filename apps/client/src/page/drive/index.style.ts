import { css } from '@emotion/react';

export const contentStyle = (length: number) =>
  css({
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '2.3rem',

    padding: length === 0 ? '' : '2.4rem 0 3.2rem 0',

    '@media (max-width: 1366px)': {
      gridTemplateColumns: length > 5 ? 'repeat(5, 1fr)' : '',
    },

    '@media (max-width: 1024px)': {
      gridTemplateColumns: length > 4 ? 'repeat(4, 1fr)' : '',
    },

    '@media (max-width: 768px)': {
      gridTemplateColumns: length > 3 ? 'repeat(3, 1fr)' : '',
    },
  });
