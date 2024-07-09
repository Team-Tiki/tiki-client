import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const sectionStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  height: '40rem',

  width: '51.1rem',
});

export const inputWrapperStyle = css({
  width: '32rem',
  height: '4.81rem',

  marginTop: '2.4rem',
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

    marginTop: '20rem',

    cursor: 'pointer',

    ...(isActive && {
      '&:hover': {
        color: theme.colors.gray_500,
      },
    }),
  });
