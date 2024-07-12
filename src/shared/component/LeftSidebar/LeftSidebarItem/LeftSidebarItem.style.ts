import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

import { fadeIn, fadeOut } from '@/shared/style/animation';

export const leftSidebarItemStyle = css({
  display: 'flex',
  alignItems: 'center',

  height: '4.8rem',

  padding: '0.4rem',

  cursor: 'pointer',
});

export const logoBoxStyle = (isClicked: boolean) =>
  css({
    display: 'flex',
    flexShrink: '0',

    width: '4rem',
    height: '4rem',

    borderRadius: '10px',

    backgroundColor: isClicked ? theme.colors.blue_300 : theme.colors.blue_900,

    justifyContent: 'center',
    alignItems: 'center',
  });

export const itemStyle = (isClicked: boolean) =>
  css({
    marginLeft: '1.2rem',

    borderRadius: '10px',

    backgroundColor: `${isClicked && theme.colors.blue_300}`,

    '&: hover': { backgroundColor: theme.colors.blue_700, '& > div': { backgroundColor: theme.colors.blue_700 } },
  });

export const textStyle = (isExpansion: boolean) =>
  css({
    alignSelf: 'center',
    width: isExpansion ? '14.9rem' : '0rem',
    marginLeft: isExpansion ? '0.8rem' : 0,

    opacity: isExpansion ? '1' : '0',

    fontWeight: '500',

    whiteSpace: 'nowrap',
    overflow: 'hidden',

    transform: isExpansion ? 'translateX(0)' : 'translateX(-30rem)',
    transition: '0.5s',
    animation: isExpansion ? `${fadeIn} 0.5s ease-in` : `${fadeOut} 0.4s ease-out`,
  });
