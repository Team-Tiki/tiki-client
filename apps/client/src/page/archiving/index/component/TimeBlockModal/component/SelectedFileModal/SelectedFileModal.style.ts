import { css } from '@emotion/react';
import { scrollStyle } from '@tiki/ui';

export const fileListWrapperStyle = css({
  width: '100%',
  maxHeight: '30rem',

  paddingTop: '2rem',

  overflowY: 'scroll',

  scrollBehavior: 'smooth',

  ...scrollStyle,
});
