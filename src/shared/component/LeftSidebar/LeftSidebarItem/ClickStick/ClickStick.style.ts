import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const stickStyle = (isClicked: boolean) =>
  css({
    flexShrink: '0',

    width: '0.4rem',
    height: '4rem',

    borderRadius: '100px',

    backgroundColor: isClicked ? theme.colors.white : theme.colors.blue_900,
  });
