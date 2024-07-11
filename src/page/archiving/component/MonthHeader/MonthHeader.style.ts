import { theme } from '@/common/style/theme/theme';

export const headerStyle = {
  display: 'flex',

  borderRadius: '8px',

  padding: '0.4rem',
  gap: '4.4rem',

  backgroundColor: theme.colors.white,
};

export const monthBtnStyle = {
  padding: '1rem 1.2rem',

  color: theme.colors.black,
  backgroundColor: theme.colors.white,
  ...theme.text.body06,

  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    color: theme.colors.blue_900,
    backgroundColor: theme.colors.blue_100,
  },

  '&:focus': {
    color: theme.colors.blue_900,
    backgroundColor: theme.colors.blue_100,
  },
};
