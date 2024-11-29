import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const noteSectionStyle = css({
  display: 'flex',

  minHeight: 'calc(100vh - 11.6rem - 4.8rem - 2rem)',
  height: 'calc(100vh - 11.6rem - 4.8rem - 2rem)',
  padding: '1.6rem',

  justifyContent: 'flex-start',
  gap: '1.6rem',

  border: `1px solid ${theme.colors.gray_300}`,
  borderRadius: '1.6rem',

  overflow: 'hidden',
});

export const tabButtonStyle = css({
  width: '8.9rem',

  ...theme.text.body06,
});

export const infoContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',

  gap: '1.6rem',
});
