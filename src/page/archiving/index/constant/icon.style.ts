import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const iconStyle = (background: string) =>
  css({
    margin: '0.4rem',
    flexShrink: '0',

    path: {
      fill: (() => {
        const color: { [key: string]: string } = {
          '#FFE6E8': theme.colors.red_200,
          '#F8E2CB': theme.colors.yellow_200,
          '#C4F2E5': theme.colors.green_200,
          '#DCD8FA': theme.colors.purple_200,
          '#E2E8F8': theme.colors.blue_200,
          '#F8E1F5': theme.colors.pink_200,
          '#D3EFFA': theme.colors.sky_200,
        };

        return color[background] || theme.colors.white;
      })(),
    },
  });
