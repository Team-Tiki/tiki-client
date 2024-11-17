import { css } from '@emotion/react';

export const pageStyle = css({
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',

  height: '100dvh',
});

export const formStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  width: '60rem',
  height: '60rem',

  padding: '6rem 10.5rem',

  '& > div': {
    width: '100%',
  },
});
