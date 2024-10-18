import { css } from '@emotion/react';

import { TabProps } from '@/common/component/Tab/TabButton';
import { theme } from '@/common/style/theme/theme';

export const tabListStyle = css({
  display: 'flex',
});

export const tabDefaultStyle = () =>
  css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',

    whiteSpace: 'nowrap',

    cursor: 'pointer',
  });

export const tabVariantStyle = (variant: Required<TabProps>['variant']) => {
  const style = {
    round: css({
      gap: '0.8rem',

      padding: '1.6rem 2rem',

      ...theme.text.body04,
      fontWeight: 500,

      border: 'none',
      borderRadius: '8px',
    }),
  };
  return style[variant];
};

export const tabActiveStyle = (isSelected: boolean, variant: Required<TabProps>['variant']) => {
  const style = {
    round: isSelected
      ? css({
          backgroundColor: theme.colors.white,

          color: theme.colors.key_500,
          fontWeight: '600',

          pointerEvents: 'none',
        })
      : css({
          backgroundColor: theme.colors.blue_100,

          color: theme.colors.gray_800,
          fontWeight: '500',
        }),
  };
  return style[variant];
};
