import { css } from '@emotion/react';

import { MenuListProps } from '@/common/component/Menu/MenuList/MenuList';
import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',

  position: 'absolute',

  padding: '0.8rem',

  zIndex: theme.zIndex.overlayTop,
});

export const variantStyle = (variant: Required<MenuListProps>['variant']) => {
  const style = {
    primary: {
      width: '19.5rem',
      gap: '0.6rem',
      borderRadius: '8px',
      border: `1px solid ${theme.colors.gray_300}`,

      boxShadow: '0.4rem 0.4rem 1rem 0 rgba(0, 0, 0, 0.1)',
    },
    colored: {
      border: `1px solid ${theme.colors.gray_300}`,
      borderRadius: '10px',

      boxShadow: '0 0.4rem 0.6rem 0 rgba(53, 63, 155, 0.15)',

      backgroundColor: theme.colors.gray_100,
    },
  };

  return style[variant];
};
