import { css } from '@emotion/react';

export const containerStyle = (width: string) =>
  css({
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
    position: 'relative',

    width,
  });
