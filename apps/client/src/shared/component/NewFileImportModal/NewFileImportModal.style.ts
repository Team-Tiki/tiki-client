import { css } from '@emotion/react';

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
    maxHeight: size === 'large' ? '25rem' : '11rem',

    overflowY: 'auto',
  });
