import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  display: 'flex',
});

export const contentStyle = (isChecked: boolean, side: 'left' | 'right', isClicked: boolean) => {
  const sidePadding = isClicked ? 1 : 1.6;
  const bgColor = isClicked ? theme.colors.gray_100 : theme.colors.white;

  const style = {
    display: 'flex',

    padding: `0.8rem ${sidePadding}rem`,

    width: '100%',

    backgroundColor: bgColor,

    borderTopLeftRadius: side === 'left' ? '100px' : 'none',
    borderBottomLeftRadius: side === 'left' ? '100px' : 'none',
    borderTopRightRadius: side === 'right' ? '100px' : 'none',
    borderBottomRightRadius: side === 'right' ? '100px' : 'none',

    border: `1px solid ${theme.colors.gray_200}`,
    borderRight: side === 'left' ? 'none' : `1px solid ${theme.colors.gray_200}`,
  };

  const beforeStyle =
    isClicked && isChecked && side === 'left'
      ? {
          content: '"✓"',

          display: 'flex',
          justifyContent: 'center',

          width: '1.6rem',
          height: '1.6rem',

          fontSize: '18px',
          color: theme.colors.gray_800,
        }
      : {};

  const afterStyle =
    isClicked && isChecked && side === 'right'
      ? {
          content: '"✓"',

          display: 'flex',
          justifyContent: 'center',

          width: '1.6rem',
          height: '1.6rem',

          fontSize: '18px',
          color: theme.colors.gray_800,
        }
      : {};

  return {
    ...style,
    ...(beforeStyle && { '::before': beforeStyle }),
    ...(afterStyle && { '::after': afterStyle }),
  };
};

export const iconStyle = css({ width: '1.6rem', height: '1.6rem' });

export const clickedIconStyle = css({
  '&>path': { fill: theme.colors.gray_800 },
});
