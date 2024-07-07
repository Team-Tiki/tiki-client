import { theme } from '@/common/style/theme/theme';

export const timeBlockStyle = {
  display: 'flex',
  gap: '0.7rem',

  padding: '0.5rem',
  marginRight: 'auto',

  borderRadius: '10rem',

  backgroundColor: theme.colors.blue_900,

  ...theme.text.body03,
};
