import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const iconBackStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '4rem',
  height: '4rem',

  borderRadius: '50%',
  backgroundColor: theme.colors.gray_100,
});

export const textStyle = css({
  color: theme.colors.gray_800,
});

export const tagStyle = (backgroundColor: string) =>
  css({
    padding: '0.4rem 0.8rem',
    borderRadius: '10px',
    fontWeight: 500,

    backgroundColor: (() => {
      switch (backgroundColor) {
        case '#D3EFFA':
          return theme.colors.sky_100;
        case '#F8E1F5':
          return theme.colors.pink_100;
        case '#F8E2CB':
          return theme.colors.yellow_100;
        case '#DCD8FA':
          return theme.colors.purple_100;
        case '#C4F2E5':
          return theme.colors.green_100;
        default:
          return theme.colors.gray_100;
      }
    })(),
    color: (() => {
      switch (backgroundColor) {
        case '#D3EFFA':
          return theme.colors.sky_200;
        case '#F8E1F5':
          return theme.colors.pink_200;
        case '#F8E2CB':
          return theme.colors.yellow_200;
        case '#DCD8FA':
          return theme.colors.purple_200;
        case '#C4F2E5':
          return theme.colors.green_200;
        default:
          return theme.colors.gray_200;
      }
    })(),
  });
