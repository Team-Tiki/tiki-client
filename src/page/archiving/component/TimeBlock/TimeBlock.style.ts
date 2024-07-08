import { theme } from '@/common/style/theme/theme';

export const blockStyle = {
  display: 'flex',

  height: '5.6rem',
  marginRight: 'auto',
  padding: '0.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',

  borderRadius: '10rem',

  backgroundColor: theme.colors.blue_100,
  ...theme.text.body03,

  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};
