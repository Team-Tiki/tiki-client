import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const sectionStyle = css({
  height: '40rem',

  backgroundColor: theme.colors.blue_900,
});

export const inputWrapperStyle = css({
  height: '1.6rem',
});

export const textStyle = css({
  fontWeight: 500,

  color: theme.colors.gray_800,
});

export const arrowStyle = css({
  width: '1.3rem',
  height: '1.3rem',
});

export const buttonStyle = (isActive: boolean) =>
  css({
    width: '32rem',

    marginTop: '19.65rem',

    cursor: 'pointer',

    ...(isActive && {
      '&:hover': {
        color: theme.colors.gray_500,
      },
    }),
  });
