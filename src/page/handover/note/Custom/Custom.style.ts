import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const noteWrapperStyle = css({
  display: 'flex',

  flexDirection: 'column',
});

export const layoutStyle = css({
  display: 'flex',
  flexDirection: 'column',

  marginTop: '3rem',

  gap: '1.6rem',

  ':last-of-type': {
    marginTop: '4rem',
  },
});

export const textareaStyle = css({
  width: '82.3rem',
  height: '45rem',

  padding: '2.1rem 2rem 2.1rem 2rem',

  borderRadius: '1rem',
  border: `1px solid ${theme.colors.gray_300}`,

  resize: 'none',

  '&:focus': {
    boxShadow: theme.shadow.inset_focus,

    transition: '0.2s ease-in-out',

    outline: 'none',
  },
});

export const guideStyle = css({
  color: theme.colors.gray_800,

  ...theme.text.body04,
});

export const fileBoxStyle = css({
  display: 'flex',

  gap: '1.6rem',
});
