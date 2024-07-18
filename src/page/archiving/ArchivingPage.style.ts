import { Block } from '@/page/archiving/type/blockType';
import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const timelineStyle = (blockSelected: Block | undefined) =>
  css({
    flexDirection: 'column',

    width: '100%',

    // margin: blockSelected ? '5.6rem 13.2rem 0rem 5.2rem' : '5.6rem 13.2rem 0rem 5.2rem',

    borderRadius: '16px',

    overflow: 'hidden',
  });

export const contentStyle = css({
  flexDirection: 'column',
  gap: '2rem',
});

export const daySectionStyle = () =>
  css({
    position: 'relative',
    display: 'flex',

    width: '100%',
    height: '46.4rem',

    border: `2px solid ${theme.colors.gray_100}`,
    borderRadius: '6px',

    whiteSpace: 'nowrap',
    scrollBehavior: 'smooth',
    overflowX: 'scroll',
    overscrollBehavior: 'contain',

    '&::-webkit-scrollbar': {
      display: 'none',
    },
  });

export const buttonStyle = () =>
  css({
    position: 'relative',

    bottom: '3rem',

    width: '13.2rem',

    marginLeft: 'auto',

    borderRadius: '28px',
    ...theme.text.body04,
    boxShadow: '0px 2px 10px 0px rgba(70, 109, 235, 0.30)',

    '&:hover': {
      backgroundColor: theme.colors.blue_300,
    },
  });
