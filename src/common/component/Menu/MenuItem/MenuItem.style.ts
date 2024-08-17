import { css } from '@emotion/react';

import { MenuItemProps } from '@/common/component/Menu/MenuItem/MenuItem';
import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.8rem',

  cursor: 'pointer',
});

export const variantStyle = (variant: Required<MenuItemProps>['variant']) => {
  const style = {
    primary: {
      padding: '0.8rem',

      backgroundColor: theme.colors.gray_100,
      borderRadius: '8px',
      border: 0,

      ...theme.text.body06,
      color: theme.colors.black,
      fontWeight: 600,

      ':hover, :focus': {
        outline: 0,
        backgroundColor: theme.colors.blue_100,
      },
    },
  };

  return style[variant];
};
