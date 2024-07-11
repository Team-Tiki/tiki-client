import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const buttonStyle = (isSelected: boolean) =>
  css({
    padding: '1.3rem  1.6rem',

    backgroundColor: theme.colors.white,
    borderRadius: '100px',
    border: `1.2px solid ${isSelected ? theme.colors.blue_900 : theme.colors.gray_400}`,

    ...theme.text.body06,
    color: `${isSelected ? theme.colors.blue_900 : theme.colors.gray_800}`,
    fontWeight: 500,

    cursor: 'pointer',
    whiteSpace: 'nowrap',

    '&:hover': {
      backgroundColor: theme.colors.blue_100,
    },
  });
