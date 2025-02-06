import { css } from '@emotion/react';

import { TagProps } from '@/Tag/Tag';
import { theme } from '@/theme';

export const commonStyle = () =>
  css({
    color: theme.colors.white,
    ...theme.text.body08,
  });

export const tagStyle = ({
  variant,
  color,
  bgColor,
}: Required<Pick<TagProps, 'variant' | 'color' | 'bgColor'>>) => {
  const bgColorToTextColorMap: Record<string, string> = {
    '#FFE6E8': theme.colors.red_200,
    '#F8E2CB': theme.colors.yellow_200,
    '#C4F2E5': theme.colors.green_200,
    '#DCD8FA': theme.colors.purple_200,
    '#E2E8F8': theme.colors.blue_200,
    '#F8E1F5': theme.colors.pink_200,
    '#D3EFFA': theme.colors.sky_200,
  };

  const style = {
    round: css({
      padding: '0.4rem 0.8rem',
      borderRadius: '1rem',
      color: bgColorToTextColorMap[bgColor] || color,
      backgroundColor: bgColor,
    }),
    square: css({
      padding: '0.5rem 0.8rem',
      borderRadius: '0.4rem',
      color: bgColorToTextColorMap[bgColor] || color,
      backgroundColor: bgColor,
    }),
  };

  return style[variant];
};
