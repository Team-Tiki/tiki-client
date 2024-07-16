import { css } from '@emotion/react';

import { fadeIn, fadeOut, moveUp } from '@/common/style/animation';
import { theme } from '@/common/style/theme/theme';

export const containerStyle = (isShown: boolean) =>
  css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '2rem',

    minWidth: '20rem',

    padding: '1rem 2rem',

    borderRadius: '24px',
    color: theme.colors.white,
    backgroundColor: theme.colors.black,

    fontSize: theme.text.body06.fontSize,
    lineHeight: theme.text.body06.fontSize,

    animation: isShown ? `${moveUp} 0.2s ease-in, ${fadeIn} .2s ease-in` : `${fadeOut} .2s ease-in forwards`,

    '& > svg': {
      width: '2rem',
      height: '2rem',
    },
  });
