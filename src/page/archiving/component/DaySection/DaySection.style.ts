import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const dayStyle = (isClicked: boolean) =>
  css({
    color: isClicked ? theme.colors.blue_900 : theme.colors.black,
    padding: '0.8rem 2.6rem',
    border: 'none',
    backgroundColor: theme.colors.white,
    ...theme.text.body04,
    cursor: 'pointer',
  });

export const bodyStyle = {
  width: '6rem',
  height: '48.4rem',

  overflow: 'scroll',

  backgroundColor: theme.colors.white,
};
