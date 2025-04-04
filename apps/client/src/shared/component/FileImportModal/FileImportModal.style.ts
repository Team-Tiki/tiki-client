import { css } from '@emotion/react';
import { scrollStyle, theme } from '@tiki/ui';

import { ellipsisStyle } from '@/common/style/ellipsis';

export const overlayStyle = css({
  maxHeight: '18rem',

  top: 'calc(100% + 0.2rem)',
  right: 0,

  gap: '0.4rem',
  padding: '0.8rem 0 0.8rem 0.8rem',

  borderRadius: '8px',
  border: `1px solid ${theme.colors.gray_200}`,

  overflowY: 'scroll',
  overscrollBehavior: 'contain',
});

export const itemStyle = () =>
  css({
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',

    padding: '0.4rem',
    borderRadius: '8px',

    '&:hover, &:focus': {
      color: theme.colors.key_500,
      backgroundColor: theme.colors.blue_100,
    },
    ...theme.text.body08,
  });

export const textFieldStyle = css({
  display: 'flex',

  flexDirection: 'column',
  alignItems: 'start',
  gap: '0.6rem',

  fontWeight: 500,
  ...ellipsisStyle,

  '& > span': {
    maxWidth: '25rem',
    fontWeight: 400,
    color: theme.colors.gray_800,

    ...ellipsisStyle,
  },
});

export const fileListStyle = css({
  maxHeight: '30.4rem',
});

export const emptyStyle = css({
  display: 'flex',

  width: '100%',
  height: '30.4rem',

  justifyContent: 'center',
  alignItems: 'center',

  color: theme.colors.gray_800,
  ...theme.text.body08,
});

export const notFoundStyle = css({
  padding: '2.2rem 0.4rem 2.2rem 0.8rem',

  margin: '0.8rem',

  pointerEvents: 'none',

  ...theme.text.body08,
});

export const listWrapperStyle = css({
  display: 'flex',

  width: '100%',
  maxHeight: '30.4rem',

  flexDirection: 'column',

  marginTop: '2rem',

  gap: '2rem',

  overflowX: 'hidden',
  overflowY: 'scroll',

  ...scrollStyle,
});
