import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const inputWrapperStyle = css({
  width: '22rem',

  height: '4rem',
});

export const textStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  height: '100%',

  color: theme.colors.gray_800,
  textAlign: 'center',
});

export const emptyStyle = css({
  position: 'absolute',

  top: '50%',
  left: '50%',

  color: theme.colors.gray_800,

  transform: 'translate(-50%, -50%)',
});

export const scrollStyle = css({
  display: 'flex',
  flexDirection: 'column',

  height: '30.4rem',
  width: '100%',

  gap: '1.6rem',
  position: 'relative',

  overflowY: 'auto',
  overflowX: 'hidden',

  boxSizing: 'content-box',

  '&::-webkit-scrollbar': {
    width: '0.4rem',
    height: '5rem',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.colors.gray_300,
    borderRadius: '4px',
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
});
