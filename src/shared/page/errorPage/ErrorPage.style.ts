import { css } from '@emotion/react';

export const viewStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

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
