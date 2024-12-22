import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const contentStyle = (length: number) =>
  css({
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
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

export const uploadLabelStyle = css({
  padding: '1.2rem 1.4rem',

  borderRadius: '8px',
  backgroundColor: theme.colors.key_500,

  color: theme.colors.white,
  ...theme.text.body08,

  whiteSpace: 'nowrap',

  transition: 'all .2s ease-in',
  '&:hover': {
    backgroundColor: theme.colors.key_600,

    cursor: 'pointer',
  },
});
