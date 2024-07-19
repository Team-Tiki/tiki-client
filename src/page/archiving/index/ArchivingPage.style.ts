import { Block } from '@/page/archiving/index/type/blockType';
import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const timelineStyle = () =>
  css({
    flexDirection: 'column',

    width: '100%',

    borderRadius: '16px',
    padding: '2.6rem 2.4rem',

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

export const buttonStyle = (blockSelected?: Block) =>
  css({
    position: 'absolute',

    zIndex: theme.zIndex.overlayTop,

    bottom: '4rem',
    right: blockSelected ? '33rem' : '4rem',

    width: '13.2rem',

    marginLeft: 'auto',

    borderRadius: '28px',
    ...theme.text.body04,
    boxShadow: '0px 2px 10px 0px rgba(70, 109, 235, 0.30)',

    transition: 'right 0.3s ease-in-out',

    '&:hover': {
      backgroundColor: theme.colors.blue_300,
    },
  });
