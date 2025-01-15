import { css } from '@emotion/react';

export const contentBoxStyle = css({
  '& > header': { height: '6.4rem' },
  '& > div': { marginTop: '0' },
});

export const dashboradScrollStyle = css({
  '::-webkit-scrollbar': {
    width: '0.6rem',
    height: '0.6rem',
  },
});

export const handoverBoxStyle = css({
  height: '64rem',

  '&>div:last-child': {
    height: '85%',
  },
});
