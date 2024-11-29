import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const periodStyle = (activeSelect: boolean) =>
  css({
    width: '26rem',
    marginRight: activeSelect ? '0.8rem' : '4.2rem',

    color: theme.colors.gray_500,
  });

export const titleStyle = css({
  width: '34rem',
  marginRight: '27.6rem',

  color: theme.colors.gray_500,
});

export const writerStyle = css({
  width: '10.4rem',
  marginRight: '3.4rem',

  color: theme.colors.gray_500,
});

export const finishedStyle = css({
  width: '6.1rem',

  color: theme.colors.gray_500,
});
