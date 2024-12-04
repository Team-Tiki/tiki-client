import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const headingStyle = css({
  fontWeight: 600,

  marginTop: '1.6rem',
});

export const textStyle = css({
  marginTop: '1.2rem',
});

export const topStyle = css({
  ...theme.heading.heading06,
  fontWeight: 500,
});
