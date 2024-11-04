import { css } from '@emotion/react';

import { scrollStyle } from '@/common/style/scroll';
import { theme } from '@/common/style/theme/theme';

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

export const fileListStyle = css(
  {
    gap: '1.4rem',

    padding: '0 0 0.7rem',

    overflowX: 'scroll',
  },
  scrollStyle,
  dashboradScrollStyle
);

export const timelineDivStyle = css({
  position: 'absolute',
  top: '0.6rem',
  right: '0.6rem',

  width: '15rem',
  height: '6rem',

  backgroundColor: theme.colors.white,
  zIndex: theme.zIndex.overlayMiddle,
});

export const timelineBtnStyle = css({
  position: 'absolute',
  top: '1rem',
  right: '1rem',
});

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
