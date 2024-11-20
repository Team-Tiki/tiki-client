import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const entireInfoStyle = css({
  display: 'flex',
  flexDirection: 'column',

  flexBasis: '34rem',
  padding: '3.2rem 1.7rem 3.2rem 3.2rem',

  borderRadius: '1.6rem 0 0 1.6rem',

  backgroundColor: theme.colors.gray_100,
});

export const titleStyle = css({
  color: theme.colors.gray_800,

  outline: 'none',
  border: 'none',

  whiteSpace: 'nowrap',

  backgroundColor: theme.colors.gray_100,

  marginBottom: '3.6rem',
  ...theme.heading.heading03,

  '::placeholder': {
    color: theme.colors.gray_800,
    ...theme.heading.heading03,
  },
});

export const infoContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',

  gap: '1.6rem',
});

export const infoLayoutStyle = css({
  display: 'flex',

  gap: '2rem',

  alignItems: 'baseline',
});

export const infoStyle = css({
  width: '5.2rem',

  color: theme.colors.gray_800,
  whiteSpace: 'nowrap',
});

export const plusBtnStyle = css({
  padding: '0.5rem',

  borderRadius: '0.6rem',

  backgroundColor: theme.colors.gray_100,

  '&:hover': {
    backgroundColor: theme.colors.gray_300,

    transition: 'all 0.2s ease-in',
  },
});
