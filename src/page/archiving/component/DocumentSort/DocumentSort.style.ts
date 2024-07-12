import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const buttonStyle = css({
  display: 'flex',

  alignItems: 'center',

  gap: 0,
  padding: '0 1.2rem',

  width: '10.5rem',
  height: '1.2rem',

  color: theme.colors.black,
  backgroundColor: theme.colors.white,

  ...theme.text.body08,
});

export const fontStyle = css({
  marginBottom: '1.2rem',
  '& ul': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    border: 0,
    boxShadow: '0px 4px 6px 0px rgba(53, 63, 155, 0.15)',

    overflowX: 'hidden',
  },
  '& li': {
    ...theme.text.body08,
    whiteSpace: 'nowrap',
  },
});
