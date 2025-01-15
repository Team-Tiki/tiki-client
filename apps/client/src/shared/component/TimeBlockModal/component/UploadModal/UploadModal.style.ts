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

export const flexStyle = css({
  width: '100%',

  paddingTop: '2rem',

  flexDirection: 'column',

  justifyContent: 'space-between',
  alignItems: 'center',

  gap: '2rem',
});
