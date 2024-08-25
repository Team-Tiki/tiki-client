import { MenuProps } from '@/common/component/Menu/Menu';

export const variantStyle = (variant: Required<MenuProps>['variant']) => {
  const style = {
    up: {
      '> ul': {
        bottom: '100%', // 위에 배치
        left: 0,
      },
    },
    down: {
      '> ul': {
        top: '100%', // 아래에 배치
        left: 0,
      },
    },
    left: {
      '> ul': {
        right: '100%', // 왼쪽에 배치
        top: 0,
      },
    },
    right: {
      '> ul': {
        left: '100%', // 오른쪽에 배치
        top: 0,
      },
    },
  };
  return style[variant];
};
