import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const containerStyle = css({
  width: '100%',
});

export const wrapperStyle = css({
  display: 'flex',

  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
  padding: '0.6rem',

  backgroundColor: theme.colors.gray_100,
  borderRadius: '8px',

  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.colors.gray_200,
  },
});

export const circleStyle = css({
  justifyContent: 'center',
  alignItems: 'center',

  padding: '0.8rem',

  backgroundColor: theme.colors.white,
  borderRadius: '16px',
});

export const fileTitleStyle = css({
  maxWidth: '15rem',

  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const fileCapacityStyle = css({
  color: theme.colors.gray_800,
});
