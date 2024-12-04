import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const viewStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: theme.colors.white,

  width: '100%',
  height: '100vh',
});

export const pageStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3rem',

  maxWidth: '30rem',

  '& > img': {
    width: '30rem',
    height: '30rem',
  },
});
