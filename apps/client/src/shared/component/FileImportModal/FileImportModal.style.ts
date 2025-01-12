import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

import { ellipsisStyle } from '@/common/style/ellipsis';

export const overlayStyle = (isOpen: boolean) =>
  css({
    maxHeight: '18rem',

    top: 'calc(100% + 0.2rem)',
    right: 0,

    gap: '0.4rem',

    borderRadius: '8px',
    border: `1px solid ${theme.colors.gray_200}`,
    boxShadow: isOpen ? theme.shadow.shadow02 : 'none',

    overflowY: 'auto',
    overscrollBehavior: 'contain',
  });

export const itemStyle = () =>
  css({
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',

    padding: '0.4rem',
    margin: '0.8rem 0.8rem 0 0.8rem',
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

  '& > span': {
    fontWeight: 400,
    color: theme.colors.gray_800,

    ...ellipsisStyle,
  },
});

export const fileListStyle = css({
  maxHeight: '30.4rem',

  marginTop: '2rem',
  overflow: 'scroll',
});

export const emptyStyle = css({
  display: 'flex',

  height: '30.4rem',

  justifyContent: 'center',
  alignItems: 'center',

  color: theme.colors.gray_800,
  ...theme.text.body08,
});
