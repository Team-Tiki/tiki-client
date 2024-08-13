import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const defaultStyle = () =>
  css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.8rem',

    width: '100%',

    padding: '1.6rem 2rem',

    border: 'none',
    borderRadius: '8px',

    font: `${theme.text.body04}`,
    fontWeight: 500,

    whiteSpace: 'nowrap',

    cursor: 'pointer',

    '&:disabled:not(:focus)': {
      backgroundColor: theme.colors.gray_400,
      color: theme.colors.white,
    },
  });

export const activeStyle = (isSelected: boolean) => {
  return isSelected
    ? css({
        backgroundColor: theme.colors.white,

        color: theme.colors.blue_900,
        fontWeight: '600',

        pointerEvents: 'none',
      })
    : css({
        backgroundColor: theme.colors.blue_100,

        color: theme.colors.gray_800,
        fontWeight: '500',
      });
};

// export const panelStyle = (isSelected: boolean) =>
//   css({
//     display: isSelected ? 'block' : 'hidden',
//   });
