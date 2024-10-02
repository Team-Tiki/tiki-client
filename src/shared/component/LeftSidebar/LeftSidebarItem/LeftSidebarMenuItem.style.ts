import { css } from '@emotion/react';

import { fadeIn, fadeOut } from '@/common/style/animation';
import { theme } from '@/common/style/theme/theme';

export const leftSidebarMenuItemStyle = css({
  display: 'flex',
  alignItems: 'center',

  cursor: 'pointer',
});

export const clubInfoStyle = (isClicked: boolean, isExpanded: boolean) =>
  css({
    gap: `${isExpanded ? '0.8rem' : 0}`,
    padding: '0.4rem',
    marginLeft: '1.6rem',

    borderRadius: '10px',
    backgroundColor: `${isClicked && theme.colors.blue_300}`,

    '&: hover': { backgroundColor: theme.colors.blue_700 },
  });

export const clubNameStyle = (isExpanded: boolean) =>
  css({
    opacity: isExpanded ? '1' : '0',

    width: isExpanded ? '14.9rem' : '0rem',

    fontWeight: '500',
    alignSelf: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',

    transform: isExpanded ? 'translateX(0)' : 'translateX(-30rem)',
    transition: '0.5s',
    animation: isExpanded ? `${fadeIn} 0.5s ease-in` : `${fadeOut} 0.4s ease-out`,
  });

export const clubLogoStyle = css({
  width: '4rem',
  height: '4rem',

  borderRadius: '10px',

  objectFit: 'cover',
});
