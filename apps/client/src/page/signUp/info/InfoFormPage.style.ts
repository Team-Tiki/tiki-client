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
  height: '51.8rem',

  padding: '6rem 10.5rem',

  '& > div': {
    width: '100%',
  },
});

export const formUnivStyle = css([
  formStyle,
  {
    height: '60rem',
  },
]);
