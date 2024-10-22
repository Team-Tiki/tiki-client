import { css } from '@emotion/react';

import { MenuItemProps } from '@/common/component/Menu/MenuItem/MenuItem';
import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',

  borderRadius: '8px',

  whiteSpace: 'nowrap',
  cursor: 'pointer',
});

export const variantStyle = (variant: Required<MenuItemProps>['variant']) => {
  const style = {
    primary: css({
      padding: '0.8rem 0.4rem 0.8rem 0.8rem ',

      backgroundColor: theme.colors.white,

      ...theme.text.body08,
      color: theme.colors.black,

      ':hover, :focus': {
        outline: theme.colors.gray_100,
        backgroundColor: theme.colors.gray_100,
      },
    }),
    colored: css({
      padding: '0.8rem',

      border: 0,
      backgroundColor: theme.colors.gray_100,

      ...theme.text.body06,
      color: theme.colors.black,
      fontWeight: 600,

      ':hover, :focus': {
        outline: 0,
        backgroundColor: theme.colors.blue_100,
      },
    }),
  };

  return style[variant];
};
