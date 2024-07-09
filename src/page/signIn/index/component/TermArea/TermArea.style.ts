import { css } from '@emotion/react';

export const wrapperStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',

  '& svg': {
    width: '2.4rem',
    height: '2.4rem',

    cursor: 'pointer',
  },
});

export const termStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});
