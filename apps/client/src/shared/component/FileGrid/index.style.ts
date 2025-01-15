import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

import { ellipsisStyle } from '@/common/style/ellipsis';

export const cardStyle = (isSmall: boolean) =>
  css({
    position: 'relative',

    minWidth: '16rem',
    maxWidth: '22rem',

    width: isSmall ? '16rem' : '100%',
    height: isSmall ? '12rem' : '16rem',

    padding: isSmall ? '1.2rem' : '2.4rem 2rem',

    border: `1px solid ${theme.colors.gray_300}`,
    borderRadius: '12px',

    cursor: 'pointer',
  });

export const iconWrapperStyle = (isSmall: boolean) =>
  css({
    width: '100%',

    padding: isSmall ? '0 0 1.8rem' : '1.2rem 0 2rem 0',
  });

export const nameStyle = css({
  ...theme.text.body06,
  fontWeight: 500,

  ...ellipsisStyle,
});

export const textStyle = css({
  color: theme.colors.gray_500,
});

export const optionListStyle = (canRenderBelow: boolean) =>
  css(
    {
      backgroundColor: theme.colors.white,
      '& svg': {
        flexShrink: 0,
      },
    },
    canRenderBelow
      ? {
          top: 'calc(100% + 1rem)',
          right: 0,
        }
      : {
          bottom: 'calc(100% + 1rem)',
          right: 0,
        }
  );

export const optionTextStyle = css({
  whiteSpace: 'nowrap',

  ...theme.text.body08,
  backgroundColor: theme.colors.white,

  fontWeight: 400,
});
