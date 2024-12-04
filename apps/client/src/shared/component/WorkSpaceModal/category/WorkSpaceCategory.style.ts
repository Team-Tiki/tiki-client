import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const selectButtonStyle = (isOpen: boolean) =>
  css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    height: '4.8rem',
    padding: '1.2rem',
    marginTop: '2.4rem',

    border: `1px solid ${isOpen ? theme.colors.key_500 : theme.colors.gray_400}`,
    borderRadius: '8px',

    backgroundColor: 'white',
    color: theme.colors.gray_500,
  });

export const selectedTextStyle = css({
  color: theme.colors.black,
});

export const arrowStyle = (isOpen: boolean) =>
  css({
    width: '2.4rem',
    height: '2.4rem',
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  });
