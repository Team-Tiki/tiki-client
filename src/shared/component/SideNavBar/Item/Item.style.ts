import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({});

export const itemStyle = (isClicked: boolean) =>
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '3.6rem',
    height: '3.6rem',
    margin: '2rem 2rem 2rem 1.6rem',

    borderRadius: '10px',
    border: isClicked ? `1px solid ${theme.colors.key_500}` : 0,

    '&:hover': {
      border: `1px solid ${theme.colors.key_500}`,
    },

    cursor: 'pointer',
  });
