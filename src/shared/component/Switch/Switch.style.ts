import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  display: 'flex',

  height: '100%',

  border: `1px solid ${theme.colors.gray_200}`,
  borderRadius: '100px',

  overflow: 'hidden',
});

export const contentStyle = (side: 'left' | 'right', isClicked: boolean) => {
  const sidePadding = isClicked ? 1 : 1.6;
  const bgColor = isClicked ? theme.colors.gray_100 : theme.colors.white;

  const style = {
    left: {
      display: 'flex',
      alignItems: 'center',
      padding: `0.8rem ${sidePadding}rem`,

      backgroundColor: bgColor,

      border: 'none',
      borderRight: `1px solid ${theme.colors.gray_200}`,

      ...(isClicked && {
        '::before': {
          content: '""',
          width: '1.6rem',
          height: '1.6rem',
          backgroundImage: `url(src/common/asset/svg/ic_check.svg)`,
        },
      }),
    },
    right: {
      display: 'flex',
      alignItems: 'center',
      padding: `0.8rem ${sidePadding}rem `,

      backgroundColor: bgColor,

      border: 'none',

      ...(isClicked && {
        '::after': {
          content: '""',
          width: '1.6rem',
          height: '1.6rem',
          backgroundImage: `url(src/common/asset/svg/ic_check.svg)`,
        },
      }),
    },
  };
  return style[side];
};

export const iconStyle = css({ width: '1.6rem', height: '1.6rem' });

export const clickedIconStyle = css({
  '&>path': { fill: theme.colors.gray_800 },
});
