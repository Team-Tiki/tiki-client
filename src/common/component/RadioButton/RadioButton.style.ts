import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

import { TagProps } from '../Tag/Tag';
import { RadioButtonProps } from './RadioButton';

export const radioButtonLayoutStyle = css({
  display: 'flex',

  gap: '0.4rem',
});

export const inputStyle = ({ checkedColor, checkedBgColor }: Partial<RadioButtonProps>) =>
  css({
    display: 'none',
    '& + label': {
      cursor: 'pointer',

      transition: '0.2s ease-in-out',

      ...theme.text.body08,
    },
    '&:checked + label': {
      color: checkedColor || theme.colors.white,
      backgroundColor: checkedBgColor || theme.colors.gray_600,
    },
  });

export const labelStyle = ({ color, bgColor }: Omit<TagProps, 'label'>) =>
  css({
    padding: '0.8rem',

    borderRadius: '0.4rem',

    color: color || theme.colors.white,
    backgroundColor: bgColor || theme.colors.gray_300,

    whiteSpace: 'nowrap',
  });
