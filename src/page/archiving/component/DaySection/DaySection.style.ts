import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const dayStyle = (isEven: boolean) =>
  css({
    dixplay: 'flex',

    width: '6rem',

    backgroundColor: isEven ? theme.colors.white : theme.colors.gray_100,
  });

export const dayBtnStyle = (isClicked: boolean) =>
  css({
    width: '6rem',
    padding: '0.8rem 2.6rem',

    border: 'none',

    color: isClicked ? theme.colors.blue_900 : theme.colors.black,
    backgroundColor: theme.colors.gray_100,
    ...theme.text.body04,

    cursor: 'pointer',
  });

export const bodyStyle = (isEven: boolean) =>
  css({
    height: '48.4rem',

    backgroundColor: isEven ? theme.colors.white : theme.colors.gray_100,

    overflow: 'scroll',
  });
