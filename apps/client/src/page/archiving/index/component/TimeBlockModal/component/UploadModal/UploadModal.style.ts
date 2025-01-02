import { css } from '@emotion/react';
import { scrollStyle } from '@tiki/ui';

export const scrollContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '76.8rem',
  width: '100%',

  gap: '1.2rem',
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
