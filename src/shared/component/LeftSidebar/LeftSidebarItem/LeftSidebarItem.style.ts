import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

import { fadeIn, fadeOut } from '../../../style/animation';

export const leftSidebarItemStyle = css({
  display: 'flex',

  height: '4rem',
  alignItems: 'center',

  gap: '0.8rem',
});

export const logoBoxStyle = css({
  display: 'flex',

  width: '4rem',
  height: '4rem',

  border: `1px solid ${theme.colors.blue_900}`,
  borderRadius: '10px',

  backgroundColor: theme.colors.gray_100,

  justifyContent: 'center',
  alignItems: 'center',

  flexShrink: '0',
});

export const textStyle = (isExpansion: boolean) => {
  const style = css({
    fontWeight: '500',

    opacity: isExpansion ? '1' : '0',

    transform: isExpansion ? 'translateX(0)' : 'translateX(-30rem)',
    transition: 'transform 0.5s',

    animation: isExpansion ? `${fadeIn} 0.5s` : `${fadeOut} 0.4s ease-out`,
  });

  return style;
};
