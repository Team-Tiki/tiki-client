import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = (isOpen: boolean) =>
  css({
    position: 'fixed',
    bottom: '1rem',
    left: '7rem',

    display: `${isOpen ? '' : 'none'}`,

    padding: '1rem 1.2rem',

    border: `1px solid ${theme.colors.gray_300}`,
    borderRadius: '10px',

    backgroundColor: theme.colors.gray_100,

    whiteSpace: 'nowrap',

    boxShadow: '0 0.4rem 0.6rem 0 rgba(53, 63, 155, 0.15)',
  });

export const contentStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',

  width: '100%',
  padding: '0.4rem',

  border: 'none',
  borderRadius: '8px',

  backgroundColor: 'transparent',
  ':hover': { backgroundColor: theme.colors.blue_100 },
});

export const textStyle = css({
  ...theme.text.body06,

  fontWeight: 600,
  color: theme.colors.black,
});
