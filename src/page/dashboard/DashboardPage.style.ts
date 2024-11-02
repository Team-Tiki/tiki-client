import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const contentBoxStyle = css({
  '& > header': { height: '6.1rem' },
  '& > div': { marginTop: '0' },
});

export const scrollStyle = css({
  '::-webkit-scrollbar': {
    width: '0.6rem',
    height: '0.6rem',
  },
  '::-webkit-scrollbar-thumb ': {
    background: theme.colors.gray_300,
    borderRadius: '3px',
  },
});

export const listItemStyle = css(
  {
    flexDirection: 'column',
    gap: '0.8rem',
    padding: '0 0.4rem',
    height: '95%',

    overflowY: 'scroll',
  },
  scrollStyle
);
