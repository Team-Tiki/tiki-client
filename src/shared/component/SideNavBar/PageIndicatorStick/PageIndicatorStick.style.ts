import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const PageIndicatorStickStyle = (isClicked: boolean, isHover: boolean) =>
  css({
    width: '0.4rem',
    height: isClicked ? '2.4rem' : isHover ? '1.6rem' : 0,

    borderRadius: '0 100px 100px 0',
    backgroundColor: isClicked ? theme.colors.key_500 : isHover ? theme.colors.key_300 : theme.colors.white,
  });
