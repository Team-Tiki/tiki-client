import { css } from '@emotion/react';

import { SelectProps } from '@/common/component/Select/Select';
import { theme } from '@/common/style/theme/theme';

export const overlayStyle = (isOpen: boolean) =>
  css({
    maxHeight: '30rem',

    top: 'calc(100% + 0.2rem)',

    borderRadius: '8px',
    border: `1px solid ${theme.colors.gray_200}`,
    boxShadow: isOpen ? theme.shadow.shadow02 : 'none',

    overflowY: 'auto',
    overscrollBehavior: 'contain',
  });

export const itemStyle = (variant: Required<SelectProps['variant']>) =>
  css(
    {
      display: 'flex',
      alignItems: 'center',

      padding: '1rem 1.2rem',
      margin: '0.8rem',
      borderRadius: '8px',

      '&:hover, &:focus': {
        color: theme.colors.blue_900,
        backgroundColor: theme.colors.blue_100,
      },
    },
    variant === 'secondary'
      ? {
          ...theme.text.body08,
        }
      : { ...theme.text.body05 }
  );

export const triggerStyle = (variant: Required<SelectProps['variant']>, isSelected: boolean) =>
  css(
    {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '0.8rem',

      padding: '1.2rem 1rem',

      border: 'none',
      boxShadow: variant === 'outline' ? theme.shadow.inset : 'none',

      ...theme.text.body06,

      backgroundColor: theme.colors.white,
      borderRadius: '8px',
    },
    variant === 'secondary'
      ? {
          fontWeight: 400,
          color: theme.colors.gray_800,
        }
      : {
          fontWeight: 600,
          color: isSelected ? theme.colors.black : theme.colors.gray_400,
        }
  );

export const iconStyle = (isOpen: boolean) =>
  css({
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
    transition: 'all 0.2s ease-in',
  });

export const scrollStyle = css`
  ::-webkit-scrollbar {
    width: 0.8rem;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray_300};
    border-radius: 10rem;
  }
`;
