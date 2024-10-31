import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const scrollStyle = css({
  '::-webkit-scrollbar': {
    height: '0.6rem',
    maxWidth: '0.6rem',
  },
  '::-webkit-scrollbar-thumb ': {
    background: theme.colors.gray_300,
    borderRadius: '3px',
    width: '0.6rem',
    maxWidth: '0.6rem',
  },
});
