import { css } from '@emotion/react';

import { ToolTipProps } from '@/ToolTip/ToolTip';
import { theme } from '@/theme';

export const containerStyle = css({
  display: 'inline-block',
  position: 'relative',
});

export const messageStyle = (isVisible: boolean) =>
  css({
    position: 'absolute',

    width: 'max-content',
    padding: '0.9rem',
    borderRadius: '8px',
    border: `1px solid ${theme.colors.gray_900}`,
    backgroundColor: `${theme.colors.gray_900}`,
    font: `${theme.text.body08}`,
    color: `${theme.colors.white}`,

    visibility: isVisible ? 'visible' : 'hidden',

    transitionDelay: isVisible ? '0.2s' : '0',

    pointerEvents: 'none',

    '&::after': {
      content: '""', 
      position: 'absolute',

      right: '100%',
      transform: `translateY(-50%) translateX(calc(0 - 6px))`,

      borderWidth: '6px',
      borderStyle: 'solid',
      borderColor: `transparent ${theme.colors.gray_900} transparent transparent`,
    },
  });

export const positionStyle = (
  position: Required<ToolTipProps>['position'],
  gap: number,
) => {
  const style = {
    top: css({
      left: '50%',
      bottom: '100%',
      transform: `translateX(-50%) translateY(calc(-${gap}rem - 8px) )`,
    }),
    bottom: css({
      left: '50%',
      up: '100%',
      transform: `translateX(-50%) translateY(calc(${gap}rem + 8px))`,
    }),
    left: css({
      top: '50%',
      right: '100%',
      transform: `translateY(-50%) translateX(calc(-${gap}rem - 8px))`,
    }),
    right: css({
      top: '50%',
      left: '100%',
      transform: `translateY(-50%) translateX(calc(${gap}rem + 8px))`,
    }),
  };

  return style[position];
};
