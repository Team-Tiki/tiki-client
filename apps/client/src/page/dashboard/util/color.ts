import { theme } from '@/common/style/theme/theme';

export const alignColor = (color: string) => {
  switch (color) {
    case '#FFE6E8':
      return theme.colors.red_200;
    case '#F8E2CB':
      return theme.colors.yellow_200;
    case '#C4F2E5':
      return theme.colors.green_200;
    case '#DCD8FA':
      return theme.colors.purple_200;
    case '#E2E8F8':
      return theme.colors.blue_200;
    case '#F8E1F5':
      return theme.colors.pink_200;
    case '#D3EFFA':
      return theme.colors.sky_200;
    default:
      return theme.colors.white;
  }
};
