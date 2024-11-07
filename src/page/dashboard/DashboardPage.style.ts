import { css } from '@emotion/react';

import { scrollStyle } from '@/common/style/scroll';

export const contentBoxStyle = css({
  '& > header': { height: '6.1rem' },
  '& > div': { marginTop: '0' },
});

export const dashboradScrollStyle = css({
  '::-webkit-scrollbar': {
    width: '0.6rem',
    height: '0.6rem',
  },
});

export const handoverBoxStyle = css({
  width: '30%',
  height: '64rem',

  paddingRight: '1rem',

  '&>div:last-child': {
    height: '85%',
  },
});
