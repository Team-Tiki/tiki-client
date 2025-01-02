import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

import { ellipsisStyle } from '@/common/style/ellipsis';

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
  maxWidth: '50rem',

  color: theme.colors.black,

  fontWeight: 400,

  ...ellipsisStyle,
});

export const capacityStyle = css({
  color: theme.colors.gray_800,
});

export const borderStyle = css({
  borderRadius: '8px',

  width: '76.8rem',
});
