import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const dayStyle = (isEven: boolean, isToday: boolean) =>
  css({
    position: 'relative',
    width: '6rem',
    height: '100vh',

    backgroundColor:
      isToday && isEven
        ? theme.colors.blue_100
        : isToday && !isEven
          ? theme.colors.blue_100
          : !isToday && !isEven
            ? theme.colors.gray_100
            : theme.colors.white,
  });

export const dayHeaderStyle = () =>
  css({
    width: '6rem',
    padding: '1.2rem 2.6rem',
    justifyContent: 'center',

    border: 'none',

    color: theme.colors.black,
    ...theme.text.body04,
  });

export const bodyStyle = () =>
  css({
    height: '100dvh',

    overflow: 'scroll',
  });

export const selectedDayStyle = css({
  position: 'absolute',

  left: '2.6rem',
  top: '2.8rem',

  zIndex: theme.zIndex.overlayTop,
});
