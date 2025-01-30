import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const itemStyle = (isClicked: boolean) =>
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '3.6rem',
    height: '3.6rem',
    padding: '0.1rem',

    backgroundColor: theme.colors.gray_100,

    borderRadius: '10px',
    border: isClicked ? `1px solid ${theme.colors.key_500}` : 'transparent',

    '&:hover': {
      // border: `1px solid ${theme.colors.key_500}`,
      backgroundColor: theme.colors.key_100,
      border: 'none',
    },

    '& > img': {
      width: '3.3rem',
      height: '3.3rem',

      borderRadius: '9px',

      objectFit: 'cover',
    },

    cursor: 'pointer',
  });

export const indicatorStyle = css({
  position: 'absolute',
  left: 0,
});

export const firstSpellStyle = css({
  font: `${theme.text.body06}`,
  color: theme.colors.gray_500,
});

export const pageIndicatorStyle = () =>
  css({
    width: '0.4rem',
    height: '2.4rem',

    borderRadius: '0 100px 100px 0',
    backgroundColor: theme.colors.key_500,
  });

export const pageIndicatorHoverStyle = () =>
  css({
    height: '1.6rem',

    backgroundColor: theme.colors.key_300,
  });
