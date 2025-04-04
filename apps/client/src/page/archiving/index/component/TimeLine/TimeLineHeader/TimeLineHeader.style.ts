import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const headerStyle = css({
  position: 'sticky',
  display: 'flex',

  top: '0',

  paddingBottom: '1.6rem',
  marginLeft: '0.6rem',

  alignItems: 'center',
  gap: '1.2rem',

  zIndex: theme.zIndex.overlayMiddle,

  backgroundColor: theme.colors.white,
});

export const wrapperStyle = css({
  position: 'sticky',
  display: 'flex',

  flexDirection: 'column',
  top: '0',

  zIndex: theme.zIndex.overlayMiddle,

  backgroundColor: theme.colors.white,
});

export const commonStyle = css({
  border: `1px solid ${theme.colors.gray_300}`,
  borderRadius: '0.8rem',

  cursor: 'pointer',
});

export const arrowStyle = css({
  padding: '0.6rem',
});

export const dateStyle = css({
  ...theme.text.body04,

  whiteSpace: 'nowrap',
});

export const buttonStyle = css({
  padding: '1rem 1.4rem',

  color: theme.colors.gray_800,
  backgroundColor: theme.colors.white,

  ...theme.text.body08,
});
