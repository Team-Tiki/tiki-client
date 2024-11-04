import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const imageBoxStyle = css({
  position: 'relative',

  marginTop: '2.4rem',
});

export const imageAddStyle = css({
  width: '23.4rem',
  height: '23.4rem',

  borderRadius: '40px',
  objectFit: 'cover',

  cursor: 'pointer',

  padding: '1rem',
});

export const imageDeleteStyle = css({
  position: 'absolute',
  top: '0',
  right: '0',

  width: '4.2rem',
  height: '4.2rem',

  cursor: 'pointer',
});

export const buttonCompleteStyle = css({
  marginTop: '4.6rem',

  width: '32rem',

  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.colors.key_100,
  },
});
