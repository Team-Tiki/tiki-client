import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '9.6rem',

  position: 'relative',

  padding: '14rem 0',

  backgroundColor: theme.colors.key_500,

  textAlign: 'center',

  scrollSnapAlign: 'start',

  '& > h1': {
    lineHeight: '140%',
  },
});

export const titleStyle = css({
  color: theme.colors.white,

  whiteSpace: 'pre-line',

  /** observe 시 스타일 적용 전 */
  opacity: 0,
  transform: 'translateY(2rem)',
});
