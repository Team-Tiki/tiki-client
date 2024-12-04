import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

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

export const dayBodyStyle = (dayCount: number) =>
  css({
    display: 'grid',

    gridTemplateColumns: `repeat(${dayCount}, 1fr)`,
    gridAutoRows: '3rem',

    rowGap: '2rem',
    gap: '1.5rem',

    minHeight: 'calc(100vh - 40rem)',
    maxHeight: 'calc(100vh - 2rem)',

    overflowY: 'scroll',

    backgroundColor: theme.colors.gray_100,
  });

export const dayBodyWrapperStyle = (isOpen: boolean) =>
  css({
    padding: isOpen ? '0.8rem 2.1rem' : '0.8rem 2.3rem',

    borderRadius: '1.6rem',

    backgroundColor: theme.colors.gray_100,

    transition: '0.2s ease-in-out',
  });
