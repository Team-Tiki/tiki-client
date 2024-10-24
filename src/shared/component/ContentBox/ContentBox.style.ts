import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const sectionStyle = css({
  position: 'relative',

  width: '100%',
  height: 'calc(100vh - 4.8rem - 6rem)',

  padding: '1.6rem',
  paddingTop: '0',

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
  height: 'calc(100% - 12rem)',

  marginTop: '0.8rem',

  overflowY: 'scroll',
  scrollBehavior: 'smooth',
});
