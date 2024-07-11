import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const tabDefaultStyle = (selected: string, tabId: string) => {
  const style =
    selected === tabId
      ? css({
          font: `${theme.text.body04}`,
          fontWeight: '600',

          color: theme.colors.blue_900,
          backgroundColor: theme.colors.white,
        })
      : css({
          font: `${theme.text.body04}`,
          fontWeight: '500',

          color: theme.colors.gray_800,
          backgroundColor: theme.colors.blue_100,
        });
  return style;
};
