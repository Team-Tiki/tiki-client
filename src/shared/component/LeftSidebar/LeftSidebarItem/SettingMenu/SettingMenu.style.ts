import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = (isOpen: boolean) =>
  css({
    display: `${isOpen ? 'flex' : 'none'}`,
    flexDirection: 'column',
    gap: '0.4rem',

    position: 'fixed',
    bottom: '1rem',
    left: '7rem',

    padding: '1rem 1.2rem',

    border: `1px solid ${theme.colors.gray_300}`,
    borderRadius: '10px',
    boxShadow: '0 0.4rem 0.6rem 0 rgba(53, 63, 155, 0.15)',

    backgroundColor: theme.colors.gray_100,
  });

export const contentStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',

  padding: '0.8rem',

  borderRadius: '8px',

  cursor: 'pointer',

  ':hover': {
    backgroundColor: theme.colors.blue_100,
  },
  ':focus': {
    backgroundColor: theme.colors.blue_100,
  },
});

export const textStyle = css({
  color: theme.colors.black,
  fontWeight: 600,
});
