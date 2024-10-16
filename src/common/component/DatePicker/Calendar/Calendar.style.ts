import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',

  padding: '2rem',

  border: `2px solid ${theme.colors.blue_200}`,
  borderRadius: '10px',

  backgroundColor: theme.colors.white,
});

export const dayStyle = css({
  padding: '0.8rem 0',

  color: theme.colors.key_500,

  fontWeight: 700,
});

export const datesContainerStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',

  textAlign: 'center',
});

export const dateStyle = css({
  padding: '0.8rem',

  borderRadius: '50%',
  border: 'none',

  cursor: 'pointer',
});

export const outOfMonthStyle = css({
  color: theme.colors.gray_300,
});

export const selectedDateStyle = css({
  backgroundColor: theme.colors.key_200,
  color: theme.colors.white,
});

export const hoverDateStyle = css({
  '&:hover, &:focus': {
    backgroundColor: theme.colors.blue_200,
    color: theme.colors.white,
  },
});
