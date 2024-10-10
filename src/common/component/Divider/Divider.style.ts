import { css } from '@emotion/react';

import { DividerProps } from '@/common/component/Divider/Divider';
import { theme } from '@/common/style/theme/theme';

export const commonStyle = (color?: string) =>
  css({
    border: 'none',

    backgroundColor: color ?? theme.colors.gray_200,
  });

export const dividerStyle = (type: Required<DividerProps>['type'], size: number) => {
  const style = {
    horizontal: css({
      width: `${size}rem`,
      height: '0.1rem',
    }),

    vertical: css({
      width: '0.1rem',
      height: `${size}rem`,
    }),
  };

  return style[type];
};
