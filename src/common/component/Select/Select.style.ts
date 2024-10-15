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
      gap: variant === 'option' ? '0.4rem' : '1.6rem',

      padding: '1rem 1.2rem',
      margin: variant === 'option' ? '0.4rem' : '0.8rem',
      borderRadius: '8px',

      '&:hover, &:focus': {
        color: theme.colors.blue_900,
        backgroundColor: theme.colors.blue_100,
      },
    },

    /** user list 혹은 option select 일 때의 font 차이 */
    variant === 'option' || variant === 'user'
      ? {
          '& > *': {
            ...theme.text.body08,
          },
        }
      : {
          '& > *': {
            ...theme.text.body05,
          },
        }
  );

export const profileStyle = css({
  width: '3.2rem',
  height: '3.2rem',

  borderRadius: '50%',

  objectFit: 'cover',
});

export const textFieldStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '0.6rem',

  fontWeight: 500,

  '& > span': {
    fontWeight: 400,
    color: theme.colors.gray_800,
  },
});

export const triggerStyle = (variant: Required<SelectProps['variant']>, isSelected: boolean) =>
  css(
    {
      display: 'flex',
      alignItems: 'center',

      height: '4.8rem',
      padding: '1.2rem 1rem',

      ...theme.text.body06,

      border: 'none',
      backgroundColor: theme.colors.white,

      whiteSpace: 'nowrap',
    },
    /** underline 있는 select trigger 버튼 */
    variant === 'underline'
      ? {
          borderBottom: `1px solid ${isSelected ? theme.colors.blue_900 : theme.colors.gray_400}`,
        }
      : {
          borderRadius: '8px',
          boxShadow: variant === 'outline' ? (!isSelected ? theme.shadow.inset : theme.shadow.inset_focus) : 'none',
        },
    /** "최근 업로드 순"과 같은 option select */
    variant === 'option'
      ? {
          justifyContent: 'center',

          fontWeight: 400,
          color: theme.colors.gray_800,
        }
      : {
          justifyContent: 'space-between',
          gap: '0.8rem',

          fontWeight: 500,
          color: isSelected ? theme.colors.black : theme.colors.gray_500,
        }
  );

export const iconStyle = (isOpen: boolean) =>
  css({
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
    transition: 'all 0.2s ease-in',
  });
