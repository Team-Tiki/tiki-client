import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const tabStyle = (selected: string, tabId: string) => {
  const defaultStyle = css({
    borderRadius: tabId === 'selected' ? '16px 0px 0px 0px' : '0px 16px 0px 0px',

    font: `${theme.text.body04}`,
  });

  const style =
    selected === tabId
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
  return [defaultStyle, style];
};
