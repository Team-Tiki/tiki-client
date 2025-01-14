import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const wrapperStyle = css({
  display: 'flex',

  alignItems: 'center',

  cursor: 'pointer',
});

export const containerStyle = css({
  display: 'grid',
  gridTemplateColumns: '25.3% 51.7% 11.6% 11.4%',

  width: '100%',
  margin: '1.6rem 0 ',
  minHeight: '1.8rem',

  cursor: 'potiner',

  '& *': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

export const profileStyle = css({
  width: '2.2rem',
  heigth: '2.2rem',

  borderRadius: '100%',
  backgroundColor: theme.colors.gray_300,
});

export const closeButtonStyle = css({
  cursor: 'pointer',
});
