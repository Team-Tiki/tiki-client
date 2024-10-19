import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',

  padding: '1.6rem',

  border: `1px solid ${theme.colors.gray_300}`,
  borderRadius: '8px',

  backgroundColor: theme.colors.white,
});

export const dayStyle = css({
  padding: '0.8rem 0',

  color: theme.colors.key_600,

  fontWeight: 700,
});

export const datesContainerStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',

  textAlign: 'center',
});

export const dateStyle = css({
  justifyContent: 'center',
  alignContent: 'center',

  width: '2.6rem',
  height: '2.6rem',

  margin: '0.3rem',

  borderRadius: '50%',
  border: 'none',

  color: theme.colors.gray_500,

  cursor: 'pointer',
});

export const selectedDateStyle = css({
  backgroundColor: theme.colors.key_100,
  border: `1px solid ${theme.colors.key_500}`,
});

export const hoverDateStyle = css({
  '&:hover, &:focus': {
    backgroundColor: theme.colors.gray_100,
  },
});
