import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const sectionStyle = css({
  position: 'relative',

  width: '100%',

  minHeight: 'calc(100vh - 11.6rem - 4.8rem - 2rem)',
  height: 'calc(100vh - 11.6rem - 4.8rem - 2rem)',

  padding: '0 1.6rem',

  border: `1px solid ${theme.colors.gray_300}`,
  borderRadius: '16px',

  overflow: 'hidden',
});

export const titleStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',

  ...theme.text.body04,
  fontWeight: 500,

  whiteSpace: 'nowrap',
});

export const titleAlignStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const descriptionStyle = css({
  ...theme.text.body08,
  color: theme.colors.gray_500,

  whiteSpace: 'nowrap',
});

export const headerStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem',

  position: 'sticky',
  top: 0,

  height: '7.2rem',

  zIndex: theme.zIndex.overlayBottom,

  padding: '1.6rem 0rem',

  borderBottom: `1px solid ${theme.colors.gray_200}`,
  backgroundColor: theme.colors.white,
});

export const contentOptionStyle = css({
  width: '100%',

  padding: '0.8rem 0',

  backgroundColor: theme.colors.white,
});

export const contentStyle = css({
  width: '100%',
  height: '100%',

  marginTop: '0.8rem',

  overflowY: 'scroll',
  scrollBehavior: 'smooth',
});
