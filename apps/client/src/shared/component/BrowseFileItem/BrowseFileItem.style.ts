import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

import { ellipsisStyle } from '@/common/style/ellipsis';

export const containerStyle = (isSelected: boolean) =>
  css({
    display: 'grid',
    gridTemplateColumns: '0.55fr 0.46fr',
    alignItems: 'center',

    width: '100%',
    height: '4rem',

    padding: '1rem',
    marginBottom: '0.4rem',

    borderRadius: '8px',

    backgroundColor: isSelected ? theme.colors.key_100 : 'transparent',

    transition: '0.2s ease-in',
    cursor: 'pointer',

    '& p, & time': {
      fontWeight: 400,

      lineHeight: '1.7rem',

      ...ellipsisStyle,
    },

    '&:hover': {
      backgroundColor: theme.colors.key_100,
    },
  });

export const timeStyle = css({
  display: 'flex',

  alignItems: 'center',

  gap: '2rem',

  ...theme.text.body06,
});

export const rightSideRowStyle = css({
  display: 'grid',

  width: '100%',

  gridTemplateColumns: '10fr 22fr',
  alignItems: 'center',

  gap: '0.2rem',
});

export const iconStyle = (isSelected: boolean) =>
  css({
    display: 'flex',

    marginLeft: 'auto',

    flexShrink: '0',

    visibility: isSelected ? 'visible' : 'hidden',
  });
