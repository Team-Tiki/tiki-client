import { theme } from '@/common/style/theme/theme';

export const headerStyle = {
  display: 'flex',

  gap: '4.4rem',
};

export const monthBtnStyle = {
  padding: '1rem 1.2rem',

  color: theme.colors.black,
  backgroundColor: theme.colors.white,

  ...theme.button.button02,

  '&:hover': {
    color: theme.colors.blue_900,
    backgroundColor: theme.colors.blue_100,
  },
};
