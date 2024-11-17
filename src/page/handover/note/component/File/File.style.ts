import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const fileStyle = css({
  display: 'flex',

  width: '23rem',

  alignItems: 'center',
  gap: '1.2rem',

  padding: '0.6rem',

  borderRadius: '0.8rem',

  backgroundColor: theme.colors.gray_100,
});

export const fileInfoStyle = css({
  display: 'flex',
  flexDirection: 'column',

  gap: '0.8rem',

  ...theme.text.body08,

  ':last-of-type': {
    color: theme.colors.gray_800,
  },
});

export const deleteIcStyle = css({
  margin: '0.8rem',
  marginLeft: 'auto',

  cursor: 'pointer',
});
