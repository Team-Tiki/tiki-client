import { MenuItemProps } from '@/common/component/Menu/MenuItem/MenuItem';
import { theme } from '@/common/style/theme/theme';

export const variantStyle = (variant: Required<MenuItemProps>['variant']) => {
  //여기서 글씨체도!
  const style = {
    primary: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',

      padding: '0.8rem',

      backgroundColor: theme.colors.gray_100,
      borderRadius: '8px',
      border: 0,

      color: theme.colors.black,
      fontWeight: 600,

      cursor: 'pointer',

      ':hover': {
        backgroundColor: theme.colors.blue_100,
      },
      ':focus': {
        backgroundColor: theme.colors.blue_100,
      },
    },
  };
  return style[variant];
};
