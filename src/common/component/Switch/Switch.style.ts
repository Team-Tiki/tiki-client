import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  display: 'flex',

  height: '100%',

  border: `1px solid ${theme.colors.gray_200}`,
  borderRadius: '100px',

  overflow: 'hidden',
});

export const contentStyle = (isChecked: boolean, side: 'left' | 'right', isClicked: boolean) => {
  const sidePadding = isClicked ? 1 : 1.6;
  const bgColor = isClicked ? theme.colors.gray_100 : theme.colors.white;

  const style = {
    display: 'flex',
    alignItems: 'center',
    padding: `0.8rem ${sidePadding}rem`,

    backgroundColor: bgColor,

    border: 'none',
    borderRight: side === 'left' ? `1px solid ${theme.colors.gray_200}` : 'none',
  };

  const beforeStyle =
    isClicked && isChecked && side === 'left'
      ? {
          content: '""',
          width: '1.6rem',
          height: '1.6rem',
          backgroundImage: `url(src/common/asset/svg/ic_check.svg)`,
        }
      : {};

  const afterStyle =
    isClicked && isChecked && side === 'right'
      ? {
          content: '""',
          width: '1.6rem',
          height: '1.6rem',
          backgroundImage: `url(src/common/asset/svg/ic_check.svg)`,
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
