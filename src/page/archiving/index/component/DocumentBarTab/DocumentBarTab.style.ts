import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const tabStyle = (tabId: string) =>
  css({
    borderRadius: tabId === 'selected' ? '16px 0px 0px 0px' : '0px 16px 0px 0px',

    font: `${theme.text.body04}`,
  });

export const selectedStyle = (selectedTabId: string, tabId: string) =>
  selectedTabId === tabId
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
