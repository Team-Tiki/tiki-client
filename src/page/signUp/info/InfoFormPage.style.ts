import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const pageStyle = css({
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',

  height: '100vh',
});

export const selectTriggerStyle = css({
  display: 'flex',

  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100%',

  padding: '1.2rem',

  border: 'none',
  borderBottom: `1px solid ${theme.colors.gray_400}`,
  backgroundColor: 'transparent',
  color: theme.colors.gray_500,

  fontSize: theme.text.body04.fontSize,
  lineHeight: theme.text.body04.lineHeight,

  '& > svg': {
    width: 10,
    height: 10,
  },
});
