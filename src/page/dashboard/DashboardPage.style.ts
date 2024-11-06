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

export const fileListStyle = css(
  {
    gap: '1.4rem',

    padding: '0 0 0.7rem',

    overflowX: 'scroll',
  },
  scrollStyle,
  dashboradScrollStyle
);

export const listItemStyle = css(
  {
    flexDirection: 'column',
    gap: '0.8rem',
    padding: '0 0.4rem',
    height: '100%',

    overflowY: 'scroll',
  },
  scrollStyle,
  dashboradScrollStyle
);

export const timelineContentStyle = css(
  {
    minHeight: '23.6rem',
    height: '23.6rem',

    padding: '0.6rem 0',

    borderRadius: '8px',
  },
  scrollStyle,
  dashboradScrollStyle
);
