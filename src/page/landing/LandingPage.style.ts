import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const landingStyle = css({
  position: 'relative',

  height: '100vh',

  overflowY: 'auto',
  scrollSnapType: 'y mandatory',

  '& > section': {
    height: '100vh',
  },
});

export const sectionStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.4rem',

  scrollSnapAlign: 'start',
});

export const startedButtonStyle = css({
  width: '32rem',

  marginTop: '0.8rem',

  fontSize: theme.text.body01.fontSize,
  lineHeight: theme.text.body01.lineHeight,
});
