import { css } from '@emotion/react';

import { TagProps } from '@/common/component/Tag/Tag';
import { theme } from '@/common/style/theme/theme';

export const commonStyle = () =>
  css({
    color: theme.colors.white,

    padding: '0.4rem 0.8rem',
    ...theme.text.body08,
  });

export const tagStyle = ({ variant, color, bgColor }: Required<Pick<TagProps, 'variant' | 'color' | 'bgColor'>>) => {
  const style = {
    round: css({
      borderRadius: '1rem',

      color: color,
      backgroundColor: bgColor,
    }),
    square: css({
      borderRadius: '0.4rem',

      color: color,
      backgroundColor: bgColor,
    }),
  };
  return style[variant];
};
