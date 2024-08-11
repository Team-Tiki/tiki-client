import { MenuProps } from '@/common/component/Menu/Menu';
import { theme } from '@/common/style/theme/theme';

export const containerStyle = (variant: Required<MenuProps>['variant'], isOpen: boolean) => {
  const style = {
    primary: {
      display: `${isOpen ? 'flex' : 'none'}`,
      //flexDirection: 'column',
      gap: '0.4rem',

      //position: 'fixed',
      bottom: '1rem',
      left: '7rem',

      padding: '1rem 1.2rem',

      border: `1px solid ${theme.colors.gray_300}`,
      borderRadius: '10px',
      boxShadow: '0 0.4rem 0.6rem 0 rgba(53, 63, 155, 0.15)',

      backgroundColor: theme.colors.gray_100,
    },
  };

  return style[variant];
};
