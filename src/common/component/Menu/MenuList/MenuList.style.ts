import { css } from '@emotion/react';

import { MenuListProps } from '@/common/component/Menu/MenuList/MenuList';
import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  position: 'fixed',

  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
});

export const variantStyle = (variant: Required<MenuListProps>['variant']) => {
  const style = {
    primary: {
      padding: '0.8rem',

      border: `1px solid ${theme.colors.gray_300}`,
      borderRadius: '10px',
      boxShadow: '0 0.4rem 0.6rem 0 rgba(53, 63, 155, 0.15)',

      backgroundColor: theme.colors.gray_100,
    },
    ddd: {},
  };

  return style[variant];
};
