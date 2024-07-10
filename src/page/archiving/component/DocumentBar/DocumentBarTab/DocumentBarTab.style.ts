import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const tabDefaultStyle = (selected: string, tabId: string) =>
  css({
    font: `${theme.text.body04}`,
    fontWeight: selected === tabId ? '600' : '500',

    color: selected === tabId ? theme.colors.blue_900 : theme.colors.gray_800,
    backgroundColor: selected === tabId ? theme.colors.white : theme.colors.blue_100,
  });
