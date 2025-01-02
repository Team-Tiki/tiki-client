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
      border: `1px solid ${theme.colors.key_500}`,
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

export const pageIndicatorStyle = (isClicked: boolean, isHover: boolean) =>
  css({
    width: '0.4rem',
    height: isClicked ? '2.4rem' : isHover ? '1.6rem' : 0,

    borderRadius: '0 100px 100px 0',
    backgroundColor: isClicked ? theme.colors.key_500 : isHover ? theme.colors.key_300 : theme.colors.white,
  });
