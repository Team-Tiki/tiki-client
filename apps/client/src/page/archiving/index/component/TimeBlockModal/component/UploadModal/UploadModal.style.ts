import { css } from '@emotion/react';
import { scrollStyle } from '@tiki/ui';

export const scrollContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '33.6rem',
  width: '100%',

  position: 'relative',

  overflowY: 'auto',
  overflowX: 'hidden',

  boxSizing: 'content-box',

  ...scrollStyle,
});

export const flexStyle = css({
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  gap: '2rem',
});
