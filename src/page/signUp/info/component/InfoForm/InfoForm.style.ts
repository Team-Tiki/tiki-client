import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const formStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '3.2rem',

  width: '100%',
  minHeight: '70dvh',

  '& > div': {
    width: '100%',
  },
});

export const selectTriggerStyle = (isError: boolean) =>
  css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '100%',

    padding: '1.2rem',

    border: 'none',
    borderBottom: `1px solid ${isError ? theme.colors.sementic_red : theme.colors.gray_400}`,
    backgroundColor: 'transparent',
    color: theme.colors.gray_500,

    fontSize: theme.text.body04.fontSize,
    lineHeight: theme.text.body04.lineHeight,

    '& > svg': {
      width: 10,
      height: 10,
    },

    '&:focus': {
      outline: 'none',

      borderColor: theme.colors.key_600,
    },
  });

export const identifyStyle = css({
  position: 'relative',

  width: '100%',
});

export const timeStyle = css({
  position: 'absolute',
  bottom: '1rem',
  right: '12.5rem',

  color: theme.colors.key_600,
  ...theme.text.body04,
});
