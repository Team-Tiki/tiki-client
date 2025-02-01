import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const wrapperStyle = css({
  display: 'flex',
  alignItems: 'center',

  cursor: 'pointer',
});

export const containerStyle = css({
  display: 'flex',

  width: '100%',
  padding: '1.3rem 1.6rem',

  cursor: 'potiner',

  '& *': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  '&:hover': {
    backgroundColor: theme.colors.key_100,
  },
});

export const profileStyle = css({
  width: '2.2rem',
  heigth: '2.2rem',

  borderRadius: '100%',
  backgroundColor: theme.colors.gray_300,
});

export const closeButtonStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',

  border: 'none',
  borderRadius: '6px',
  backgroundColor: 'inherit',

  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.colors.gray_200,
  },
});

export const checkBoxStyle = css({
  marginRight: '1.6rem',
});
