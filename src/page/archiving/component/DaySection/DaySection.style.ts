import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const dayStyle = (isEven: boolean) =>
  css({
    position: 'relative',
    width: '6rem',
    height: '100vh',

    backgroundColor: isEven ? theme.colors.white : theme.colors.gray_100,
  });

export const dayHeaderStyle = css({
  width: '6rem',

  padding: '0.8rem 2.6rem',
  justifyContent: 'center',

  border: 'none',

  color: theme.colors.black,
  backgroundColor: theme.colors.gray_100,
  ...theme.text.body04,
});

export const bodyStyle = (isEven: boolean) =>
  css({
    height: '48.4rem',

    backgroundColor: isEven ? theme.colors.white : theme.colors.gray_100,

    overflow: 'scroll',
  });

export const selectedDayStyle = css({
  position: 'absolute',

  left: '2.5rem',
  top: '2.8rem',

  zIndex: theme.zIndex.overlayTop,
});
