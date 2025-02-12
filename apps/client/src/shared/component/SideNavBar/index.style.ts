import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const itemStyle = (isClicked: boolean, isAddButton: boolean) =>
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '3.6rem',
    height: '3.6rem',
    padding: '0.1rem',

    backgroundColor: isAddButton ? 'inherit' : theme.colors.gray_100,

    borderRadius: '10px',
    border: isClicked ? `1px solid ${theme.colors.key_500}` : 'transparent',

    '&:hover': {
      border: isAddButton ? 'none' : `1px solid ${theme.colors.key_500}`,
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
    height: '2.4rem',

    borderRadius: '0 100px 100px 0',
    backgroundColor: isClicked ? theme.colors.key_500 : isHover ? theme.colors.key_300 : theme.colors.white,
  });

export const pageIndicatorHoverStyle = () =>
  css({
    height: '1.6rem',

    backgroundColor: theme.colors.key_300,
  });

export const profileImgStyle = css({
  objectFit: 'cover',
});

export const containerStyle = css({
  position: 'fixed',

  height: '100vh',

  borderRight: `1px solid ${theme.colors.gray_300}`,

  zIndex: theme.zIndex.overlayMiddle,
});

export const tikiLogoStyle = css({
  width: '2.8rem',
  height: '2.8rem',

  margin: '2.4rem',
});

export const settingStyle = css({
  position: 'fixed',

  alignItems: 'center',
  justifyContent: 'center',

  padding: '2rem',
  bottom: 0,
});
