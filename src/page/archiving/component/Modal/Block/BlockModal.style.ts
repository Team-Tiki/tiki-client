import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const buttonStyle = (isActive: boolean) =>
  css({
    width: '32rem',

    cursor: 'pointer',

    marginTop: '2.4rem',

    ...(isActive && {
      '&:hover': {
        color: theme.colors.gray_500,
      },
    }),
  });
