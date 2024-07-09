import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const buttonStyle = (isClicked: boolean) =>
  css({
    padding: '1.3rem  1.6rem',

    backgroundColor: theme.colors.white,
    borderRadius: '100px',
    border: `1.2px solid ${isClicked ? theme.colors.blue_900 : theme.colors.gray_400}`,

    ...theme.text.body04,
    color: `${isClicked ? theme.colors.blue_900 : theme.colors.gray_800}`,
    fontWeight: 500,

    cursor: 'pointer',

    '&:hover': {
      backgroundColor: theme.colors.blue_100,
    },
  });
