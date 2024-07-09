import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

import { fadeIn, fadeOut } from '@/shared/style/animation';

export const leftSidebarItemStyle = css({
  display: 'flex',

  height: '4rem',
  alignItems: 'center',

  gap: '0.8rem',
});

export const logoBoxStyle = (isClicked: boolean) =>
  css({
    display: 'flex',
    // flexShrink: '0',

    width: '4rem',
    height: '4rem',

    border: isClicked ? `1px solid ${theme.colors.blue_900}` : 'none',
    borderRadius: '10px',

    backgroundColor: theme.colors.gray_100,

    justifyContent: 'center',
    alignItems: 'center',
  });

export const textStyle = (isExpansion: boolean) =>
  css({
    fontWeight: '500',

    opacity: isExpansion ? '1' : '0',

    transform: isExpansion ? 'translateX(0)' : 'translateX(-30rem)',
    transition: 'transform 0.5s',

    animation: isExpansion ? `${fadeIn} 0.5s ease-in` : `${fadeOut} 0.4s ease-out`,
  });
