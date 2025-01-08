import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const inviteStyle = css({
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.6rem',

  padding: '3.2rem 2.4rem',
  width: '100%',

  borderRadius: '12px',
  backgroundColor: theme.colors.gray_100,
});

export const firstSpellStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '4.8rem',
  height: '4.8rem',

  borderRadius: '12px',
  backgroundColor: theme.colors.white,
  color: theme.colors.gray_500,

  fontSize: '2rem',
});
