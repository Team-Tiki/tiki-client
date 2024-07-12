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

  '&:focus': {
    borderColor: theme.colors.blue_900,
  },
});

export const identifyStyle = (isMailSent: boolean) =>
  css({
    position: 'relative',
    visibility: isMailSent ? 'visible' : 'hidden',
    width: '100%',

    alignItems: 'end',
    justifyContent: 'space-between',
    gap: '0.8rem',
  });

export const timestyle = css({
  position: 'absolute',

  top: '1.8rem',
  right: '13rem',

  color: theme.colors.blue_900,
  ...theme.text.body04,
});
