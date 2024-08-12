import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const defaultStyle = () =>
  css({
    cursor: 'pointer',
  });

export const activeStyle = (isSelected: boolean) => {
  return isSelected
    ? css({
        backgroundColor: theme.colors.white,

        color: theme.colors.blue_900,
        fontWeight: '600',

        pointerEvents: 'none',
      })
    : css({
        backgroundColor: theme.colors.blue_100,

        color: theme.colors.gray_800,
        fontWeight: '500',
      });
};
