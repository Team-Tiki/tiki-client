import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

import { TagProps } from '../Tag/Tag';

export const radioButtonLayoutStyle = css({
  display: 'flex',

  gap: '0.4rem',
});

export const labelStyle = ({ color, bgColor }: Omit<TagProps, 'label'>) =>
  css({
    padding: '0.8rem',

    borderRadius: '0.4rem',

    color: color,
    backgroundColor: bgColor,

    whiteSpace: 'nowrap',
  });

export const inputStyle = css({
  display: 'none',

  '& + label': {
    cursor: 'pointer',

    transition: '0.2s ease-in-out',

    color: theme.colors.white,
    backgroundColor: theme.colors.gray_300,
    ...theme.text.body08,
  },

  '&:checked + label': {
    backgroundColor: theme.colors.gray_600,
  },
});
