import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const scrollStyle = {
  '::-webkit-scrollbar': {
    width: '0.8rem',
  },
  '::-webkit-scrollbar-thumb': {
    background: theme.colors.gray_300,
    borderRadius: '10rem',
  },
  '::-webkit-scrollbar-track': {
    background: 'transparent',
  },
};
