import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const entireDayStyle = css({
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  height: '100%',
});

export const dayStyle = css({
  display: 'flex',
  flexDirection: 'row',

  justifyContent: 'space-between',
});

export const dayHeaderStyle = (isToday: boolean, isOpen: boolean) =>
  css({
    display: 'flex',

    width: '2rem',
    height: '2rem',

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: '0.6rem',

    borderRadius: '0.4rem',

    color: theme.colors.gray_800,
    backgroundColor: isToday ? theme.colors.gray_200 : theme.colors.white,

    ...theme.text.body08,

    ':first-of-type': {
      marginLeft: isOpen ? '1.9rem' : '2.1rem',
    },

    ':last-of-type': {
      marginRight: isOpen ? '1.9rem' : '2.1rem',
    },
  });

export const dayBodyStyle = css({
  position: 'relative',
  display: 'flex',

  height: '41.2rem',

  justifyContent: 'center',
  alignItems: 'center',

  maxHeight: 'calc(100vh - 2rem)',

  overflowY: 'auto',

  backgroundColor: theme.colors.gray_100,

  borderRadius: '1.6rem',
});
