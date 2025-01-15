import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

import { alignColor } from '@/page/dashboard/util/color';

export const containerStyle = css({
  flexDirection: 'column',
  alignItems: 'center',

  width: '100%',
  minHeight: '10rem',
  padding: '1.6rem',

  backgroundColor: theme.colors.gray_100,
  borderRadius: '8px',

  cursor: 'pointer',

  ':hover': {
    backgroundColor: theme.colors.gray_200,

    transition: 'all ease 0.5s',
  },
});

export const titleStyle = css({
  width: '100%',
  paddingBottom: '0.6rem',

  color: theme.colors.black,
});

export const contentStyle = css({
  width: '100%',
  paddingBottom: '1.6rem',

  color: theme.colors.gray_800,

  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

export const detailContainerStyle = css({
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100%',

  overflow: 'hidden',
});

export const detailStyle = css({
  alignItems: 'center',

  gap: '0.4rem',
});

export const tagStyle = (color: string) =>
  css({
    maxWidth: '18rem',

    color: alignColor(color),

    whiteSpace: 'nowrap',
    overflow: 'hidden',

    textOverflow: 'ellipsis',
  });
