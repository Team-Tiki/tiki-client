import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const itemStyle = (isSelected: boolean) =>
  css({
    padding: '1rem',
    marginBottom: '0.4rem',

    borderRadius: '8px',
    border: 'none',

    backgroundColor: isSelected ? theme.colors.key_100 : 'transparent',

    transition: '0.2s ease-in',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: theme.colors.key_100,
    },
  });

export const textStyle = css({
  width: '42.9rem',

  color: theme.colors.gray_800,
});

export const borderStyle = css({
  borderRadius: '8px',
  border: `1px solid ${theme.colors.gray_300}`,

  width: '37.5rem',
});
