import { css } from '@emotion/react';

export const containerStyle = (width: string) =>
  css({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',

    width,
  });
