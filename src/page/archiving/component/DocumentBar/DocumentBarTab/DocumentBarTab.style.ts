import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const tabDefaultStyle = (selected: boolean) =>
  css({
    font: `${theme.text.body04}`,
    fontWeight: selected ? '600' : '500',

    color: selected ? theme.colors.blue_900 : theme.colors.gray_800,
    backgroundColor: selected ? theme.colors.white : theme.colors.blue_100,
  });
