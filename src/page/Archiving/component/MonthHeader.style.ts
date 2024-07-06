import { theme } from '@/common/style/theme/theme';

export const headerStyle = {
  display: 'flex',
};

export const monthBtnStyle = {
  color: theme.colors.black,
  backgroundColor: theme.colors.white,

  ...theme.button.button02,

  '&:hover': {
    color: theme.colors.blue_900,
    backgroundColor: theme.colors.blue_100,
  },
};
