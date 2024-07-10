import { theme } from '@/common/style/theme/theme';

export const headerStyle = {
  display: 'flex',

  padding: '0.4rem',

  gap: '4.4rem',
};

export const monthBtnStyle = {
  padding: '1rem 1.2rem',

  color: theme.colors.black,
  backgroundColor: theme.colors.white,

  transition: 'all 0.2s ease-in-out',

  ...theme.text.body06,

  '&:hover': {
    color: theme.colors.blue_900,
    backgroundColor: theme.colors.blue_100,
  },

  '&:focus': {
    color: theme.colors.blue_900,
    backgroundColor: theme.colors.blue_100,
  },
};
