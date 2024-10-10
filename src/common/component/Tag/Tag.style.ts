import { css } from '@emotion/react';

import { TagProps } from '@/common/component/Tag/Tag';
import { theme } from '@/common/style/theme/theme';

export const commonStyle = () =>
  css({
    color: theme.colors.white,

    padding: '0.4rem 0.8rem',
  });

export const tagStyle = ({ variant, color }: Required<Pick<TagProps, 'variant' | 'color'>>) => {
  const style = {
    round: css({
      borderRadius: '1rem',

      backgroundColor: color ?? theme.colors.green,
    }),
    square: css({
      borderRadius: '0.4rem',

      backgroundColor: color ?? theme.colors.gray_600,
    }),
  };
  return style[variant];
};
