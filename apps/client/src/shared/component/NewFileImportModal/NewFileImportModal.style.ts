import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const uploadBoxStyle = (size: 'medium' | 'large') =>
  css({
    display: 'flex',

    width: '100%',

    padding: size === 'large' ? '3.2rem 6.35rem' : '3.2rem',
    marginBottom: '2rem',

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  });

export const scrollBoxStyle = (size: 'medium' | 'large') =>
  css({
    display: 'flex',
    flexDirection: 'column',

    maxHeight: size === 'large' ? '25rem' : '11rem',

    gap: '2rem',

    overflowY: 'auto',
  });

export const boxStyle = css({
  borderRadius: '8px',
  border: `1px dashed ${theme.colors.gray_400}`,

  color: theme.colors.gray_800,
});

export const textStyle = css({
  color: theme.colors.gray_800,
});

export const buttonStyle = css({
  width: '16rem',

  color: theme.colors.gray_800,
});
