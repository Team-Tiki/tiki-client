import { css } from '@emotion/react';
import { scrollStyle } from '@tiki/ui';

export const scrollContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '39.5rem',
  width: '100%',

  position: 'relative',

  overflowY: 'auto',
  overflowX: 'hidden',

  boxSizing: 'content-box',

  ...scrollStyle,
});
