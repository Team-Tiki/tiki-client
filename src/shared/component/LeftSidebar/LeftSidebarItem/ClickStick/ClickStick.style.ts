import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const stickStyle = (isClicked: boolean) =>
  css({
    flexShrink: '0',

    visibility: isClicked ? 'visible' : 'hidden',

    width: '0.4rem',
    height: '4rem',

    borderRadius: '100px',

    backgroundColor: theme.colors.white,
  });
