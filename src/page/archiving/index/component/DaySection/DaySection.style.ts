import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const entireDayStyle = css({
  width: '100%',
});

export const dayStyle = css({
  position: 'relative',

  height: 'calc(100vh + 4rem)',

  backgroundColor: theme.colors.gray_100,
});

export const dayHeaderStyle = (isToday: boolean) =>
  css({
    width: '6rem',
    padding: '1.2rem 2.6rem',
    justifyContent: 'center',

    border: 'none',

    color: theme.colors.gray_800,
    backgroundColor: isToday ? theme.colors.gray_200 : theme.colors.white,
    ...theme.text.body08,
  });

export const bodyStyle = () =>
  css({
    height: '100dvh',
  });

export const selectedDayStyle = css({
  position: 'absolute',

  left: '2.6rem',
  top: '2.8rem',

  zIndex: theme.zIndex.overlayTop,
});
