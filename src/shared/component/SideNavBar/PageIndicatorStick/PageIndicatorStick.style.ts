import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const PageIndicatorStickStyle = (isClicked: boolean) =>
  css({
    width: '0.4rem',
    height: '2rem',

    borderRadius: '0 100px 100px 0',
    backgroundColor: isClicked ? theme.colors.key_500 : theme.colors.white,
  });
