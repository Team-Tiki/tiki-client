import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const sectionStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  paddingLeft: '9.55rem',
  paddingRight: '9.55rem',
});

export const inputWrapperStyle = css({
  marginTop: '2.4rem',

  width: '32rem',
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
    marginTop: '19rem',

    width: '32rem',

    cursor: 'pointer',

    ...(isActive && {
      '&:hover': {
        color: theme.colors.gray_500,
      },
    }),
  });
