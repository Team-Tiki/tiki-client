import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const buttonStyle = (isSelected: boolean) =>
  css({
    padding: '1.3rem  1.6rem',

    backgroundColor: theme.colors.white,
    borderRadius: '100px',
    border: `1.2px solid ${isSelected ? theme.colors.key_500 : theme.colors.gray_400}`,

    ...theme.text.body06,
    color: `${isSelected ? theme.colors.key_500 : theme.colors.gray_800}`,
    fontWeight: 500,

    cursor: 'pointer',
    whiteSpace: 'nowrap',

    '&:hover': {
      backgroundColor: theme.colors.blue_100,
    },
  });
