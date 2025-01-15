import { css } from '@emotion/react';
import { scrollStyle } from '@tiki/ui';

export const tagListStyle = css({
  width: '100%',
  maxHeight: '30.4rem',

  marginTop: '2rem',

  overflowY: 'scroll',

  ...scrollStyle,
});
